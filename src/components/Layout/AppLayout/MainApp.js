import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from 'components/Layout/Header';
import Sidenav from 'components/Layout/Sidenav';
import Footer from 'components/Layout/Footer';
import Customizer from 'components/Customizer';
import LoadingComponent from 'components/Loading';

let Home = loadable({
  loader: () => import('routes/app/routes/home/'),
  loading: LoadingComponent
})

let Contactus = loadable({
  loader: () => import('routes/app/routes/contactus/'),
  loading: LoadingComponent
})

let Articlepane = loadable({
  loader: () => import('routes/app/routes/articlepane/'),
  loading: LoadingComponent
})

let Aboutus = loadable({
  loader: () => import('routes/app/routes/aboutus/'),
  loading: LoadingComponent
})

let ArticleBlog = loadable({
  loader: () => import('routes/app/routes/articleblog/'),
  loading: LoadingComponent
})

// let Dashboard = loadable({
//   loader: () => import('routes/app/routes/dashboard/'),
//   loading: LoadingComponent
// })
// let Chart = loadable({
//   loader: () => import('routes/app/routes/chart/'),
//   loading: LoadingComponent
// })
// let ECommerce = loadable({
//   loader: () => import('routes/app/routes/ecommerce/'),
//   loading: LoadingComponent
// })
// let Form = loadable({
//   loader: () => import('routes/app/routes/form/'),
//   loading: LoadingComponent
// })
// let Page = loadable({
//   loader: () => import('routes/app/routes/page/'),
//   loading: LoadingComponent
// })
// let PageLayout = loadable({
//   loader: () => import('routes/app/routes/page-layout/'),
//   loading: LoadingComponent
// })
// let Table = loadable({
//   loader: () => import('routes/app/routes/table/'),
//   loading: LoadingComponent
// })
// let UI = loadable({
//   loader: () => import('routes/app/routes/ui/'),
//   loading: LoadingComponent
// })

let Exception = loadable({
  loader: () => import('routes/exception/'),
  loading: LoadingComponent
})



class MainApp extends React.Component {

  render() {
    const { match } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="h-100">
                <Route path={`${match.url}/home`} component={Home} />
                <Route path={`${match.url}/contactus`} component={Contactus} />
                <Route path={`${match.url}/articlepane`} component={Articlepane} />
                <Route path={`${match.url}/aboutus`} component={Aboutus} />
                {/*<Route path={`${match.url}/dashboard`} component={Dashboard} />*/}
                {/*<Route path={`${match.url}/chart`} component={Chart} />*/}
                {/*<Route path={`${match.url}/ecommerce`} component={ECommerce} />*/}
                {/*<Route path={`${match.url}/form`} component={Form} />*/}
                <Route path={`${match.url}/articleblog`} component={ArticleBlog} />
                {/*<Route path={`${match.url}/pglayout`} component={PageLayout} />*/}
                {/*<Route path={`${match.url}/table`} component={Table} />*/}
                {/*<Route path={`${match.url}/ui`} component={UI} />*/}
                <Route path={`${match.url}/exception`} component={Exception} />
              </div>
            </div>

            <Footer />
          </div>
        </section>

        {/*<Customizer />*/}
      </div>
    );
  }
}

export default MainApp;
