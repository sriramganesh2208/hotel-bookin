import "./mailList.css"
import {Button} from "@mui/material"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <Button variant="outlined">Subscribe</Button>
      </div>
    </div>
  )
}

export default MailList