import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify'

const REACTION_PAGES = 'lz-reacted-pages';

const useSetReaction = () => {
  const [showReaction, setShowReaction] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { asPath } = useRouter();

  const getReactionList = (): string | null => localStorage.getItem(REACTION_PAGES);
  const setReactionList = (data: string): void => localStorage.setItem(REACTION_PAGES, data);

  const saveReaction = async (value: boolean) => {
    try {
      setLoading(true);
      await sendReactionRequest(value);
      const reactionPages: string = getReactionList();

      if (!reactionPages) {
        setReactionList(JSON.stringify([asPath]))
      } else {
        const reactionArr: Array<any> = JSON.parse(reactionPages)
        if (!reactionArr.includes(asPath)) {
          reactionArr.push(asPath)
          setReactionList(JSON.stringify(reactionArr));
        }
      }
      setShowReaction(false)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const sendReactionRequest = async (value: boolean) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/documentation/feedback`, {
      "page": asPath.slice(6),
      "is_helpful": value
    });
    if (response?.status === 200) {
      toast.success(response?.data?.message);
    }
  }

  useEffect(() => {
    let reactionPages: string = JSON.parse(getReactionList());
    if (!reactionPages || !reactionPages.includes(asPath)) {
      setShowReaction(true)
    } else {
      setShowReaction(false)
    }
  }, [asPath]);

  return { showReaction, saveReaction, loading }
}

export default useSetReaction;