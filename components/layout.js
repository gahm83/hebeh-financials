import SlideDrawer from './slidedrawer/slidedrawer';
// import Footer from './footer'

export default function Layout({ children, props }) {
  console.log(props);
  return (
    <>
      <SlideDrawer />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}