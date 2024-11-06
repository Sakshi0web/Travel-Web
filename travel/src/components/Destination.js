import desImg1 from "../images/img-6.jpg";
import desImg2 from "../images/img-7.jpg";
import desImg3 from "../images/img-8.jpg";
import desImg4 from "../images/img-9.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
    return(
        <div className="destination">
            <h1> Popular Destinations </h1>
            <p> Tours give you the opportunity to see a lot, within a time frame. </p>
            
            <DestinationData 
                cName="first-des"
                heading="Taal Volcano, Batangas"
                text="One of the most iconic views wufd gdbbvdfu rehgujcvb jbcvugu terhfbvjb v jbvus dgfug fvjhgh ht mnghreyhuvt hbmnfgaugrt834ht  uyv8wyt8iugjke thiehgivn 
                ewfhs feidhvbjef fdghbjh cvhgujfebgvhj  hbfb hbvjb ruhfib rofgbv hggbv urh ghv hgfdb dfjkdbnv ghh frhf rygre  regbb b htguebn rgehfr ghb mers hgfbm dhj bve 
                eurfhbds i jgfd  rgbv egb b vebb fdng dm bn mcb cmx bfg bm b vb bcd bnkc mx bfv mbdffx vbc nkb nm dfgn mcmcbb mxkb , thivh9tuy uhyihgvr htiuhvihjng uiohngvnkjn !"
                img1={desImg1}
                img2={desImg2}
            />

            <DestinationData 
                cName="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="One of the most iconic views wufd gdbbvdfu rehgujcvb jbcvugu terhfbvjb v jbvus dgfug fvjhgh ht mnghreyhuvt hbmnfgaugrt834ht  uyv8wyt8iugjke thiehgivn 
                ewfhs feidhvbjef fdghbjh cvhgujfebgvhj  hbfb hbvjb ruhfib rofgbv hggbv urh ghv hgfdb dfjkdbnv ghh frhf rygre  regbb b htguebn rgehfr ghb mers hgfbm dhj bve 
                eurfhbds i jgfd  rgbv egb b vebb fdng dm bn mcb cmx bfg bm b vb bcd bnkc mx bfv mbdffx vbc nkb nm dfgn mcmcbb mxkb , thivh9tuy uhyihgvr htiuhvihjng uiohngvnkjn !"
                img1={desImg3}
                img2={desImg4}
            />      

        </div>
    );
};

export default Destination;