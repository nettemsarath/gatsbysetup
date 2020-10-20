
import React from "react"
import ArtDirectedFullBackground  from "../components/Background"
import "./test.scss"

function Test (props){
    console.log("Test Props are:", props.location );
    return (
        <ArtDirectedFullBackground>
        {/* <div className="testclass">
            THIS is for Testing
        </div> */}
        <div>
            <div>
                HII NETTEM SARATH
            </div>
            <div>
                HII NETTEM SARATH
            </div>
            <div>
                HII NETTEM SARATH
            </div>
        </div>

        </ArtDirectedFullBackground>

    )
}

export default Test ;