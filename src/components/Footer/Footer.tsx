import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";

import './footer.css';

export function Footer(){
  return (
    <footer className='w-full bg-blue-1 flex justify-center py-3 sticky bottom-0 left-0'>
      <div className="footer__content flex items-center justify-between">
        <div className="footer__text">
          <Heading color="white">
            Don't miss what is happening
          </Heading>

          <Text color="white" asChild>
            <p>People on Twitter are the first to know.</p>
          </Text>
        </div>

        <div className="footer__btnGroup grid grid-cols-2 gap-x-3">
          <Button style="outline" color="white">Log in</Button>
          <Button color="white">Sign Up</Button>
        </div>
      </div>
    </footer>
  )
}
