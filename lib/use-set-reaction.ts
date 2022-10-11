import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast, } from 'react-toastify';

const REACTION_PAGES = 'lz-reacted-pages';

const useSetReaction = () => {
  const [showReaction, setShowReaction] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { asPath } = useRouter();

  const getReactionList = (): any | null => {
    let result = document.cookie.match(new RegExp(REACTION_PAGES + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
  };
  const setReactionList = (data: any): void => {
    const cookie = `${REACTION_PAGES}=${JSON.stringify(data)}; path=/;`
    document.cookie = cookie;
  };

  const saveReaction = async (value: boolean) => {
    try {
      setLoading(true);
      const response = await sendReactionRequest(value);
      toast.success(response);
      const reactionPages: Array<string> | null = getReactionList();

      if (!reactionPages) {
        setReactionList([asPath]);
      } else {
        if (!reactionPages.includes(asPath)) {
          reactionPages.push(asPath)
          setReactionList(reactionPages);
        }
      }
      setShowReaction(false)
    } catch (error) {
      toast.error('Something went wrong!')
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
      return response?.data?.message || "Your feedback has been sent successfully";
    }
    return "Your feedback has been sent successfully";
  }

  useEffect(() => {
    let reactionPages: Array<string> | null = getReactionList();
    if (!reactionPages || !reactionPages.includes(asPath)) {
      setShowReaction(true)
    } else {
      setShowReaction(false)
    }
  }, [asPath]);

  return { showReaction, saveReaction, loading }
}

export default useSetReaction;