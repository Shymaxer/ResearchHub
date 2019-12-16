import React from "react"
import FirstStep from "../molecules/FirstStep"



function Main(props) {
  
    return (
        <main>
            <section className="steps">
                <form>
                    <FirstStep />
                </form>
                     
            </section>
           
        </main>
    )
}

export default Main