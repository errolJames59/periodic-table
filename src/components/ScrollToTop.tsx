import { Button } from "./ui/button"

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="sticky z-50 flex justify-center mt-4 lg:hidden">
      <Button onClick={handleClick}>Scroll to top</Button>
    </div>
  )
}

export default ScrollToTop
