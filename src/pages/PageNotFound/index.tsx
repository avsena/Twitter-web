import { Link } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import { Text } from "../../components/Text/Text"


export function PageNotFound() {
    return (
      <>
      <div className="grid grid-rows-[1fr_auto] h-screen">
        <main className="not-found__container flex justify-center bg-white dark:bg-dark-1">
          <div className="w-[275px]">
          </div>
        <img src="src/imgs/error404.png" alt="" />
          <div className="w-[1000px] box-border flex flex-col items-center text-center pt-12">
            <Text color="gray" className="mb-7">Hmm...this page doesn’t exist. Try searching for something else.</Text>
            <Link to={"/home"}>
              <Button>Back</Button>
            </Link>
          </div>
  
        </main>
        <Footer />
      </div>
      </>
    )
  }