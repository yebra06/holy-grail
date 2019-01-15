import Footer from './Footer';
import Header from './Header';

const AppFrame = ({ children }) => (
  <div className='container'>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppFrame;
