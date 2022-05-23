import { getLayout } from 'components';
import { getDocBySlug } from 'utils';

const Home = ({ blog }) => {
  console.log(blog);
  return (
    <div className="min-h-screen">
      
    </div>
  );
};

Home.getLayout = getLayout;
export default Home;

export function getServerSideProps(){
  const blog = getDocBySlug('index');

  return {
    props: {
      blog
    }
  };
}
