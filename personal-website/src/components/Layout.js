import Header from './Header'
import Footer from './Footer'
import LandingPage from './LandingPage';

function Layout({ children }) {
    return (
        <div className="Layout">

            <Header>
            </Header>
            <LandingPage></LandingPage>
            <Footer>
            </Footer>
        </div>
    );
}

export default Layout;