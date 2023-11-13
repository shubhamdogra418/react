import React from "react";
import ReactDOM from "react-dom/client";



//JSX
    const heading3= //react element
    (<h1 id="head" key="h2"> hey JSX
    </h1>);
//components

    const Title= () => ( 
        <a href="/">
            <img src="https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.6435-9/65618989_353191842047067_828219034976649216_n.jpg?stp=cp0_dst-jpg_e15_p480x480_q65&_nc_cat=108&ccb=1-7&_nc_sid=efc22e&_nc_ohc=IIgebkZ676UAX_ZGohJ&_nc_ht=scontent.fhyd1-2.fna&oh=00_AfBoMV19vSABPIKoB6m7FPdrgaOonLP6eJ-NCgjEEPApGw&oe=6579356A"
                className="logo" 
                alt="logo"
            />
        </a>
    );
   
    
    const Header= () => { //fucntional component returns JSX
      return  ( 
        <div className="header">  
            <Title/>
            <div className="nav-items"> 
                <ul> 
                    <li> Home</li>
                    <li> About</li>
                    <li> Contact Us</li>
                    <li> Cart</li>

                </ul>
            </div>
        </div>
        );
    };
    const kfc = {
        name: "KFC",
        image: 
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
        cusines: ["Burger", " American"],
        rating: 4.2,
    };
    const RestrauntCard =() => {
        return  (
            <div className="card">
                <img src={kfc.image}/> 
                <h2> {kfc.name} </h2>
                <h3> {kfc.rating} stars</h3>
                <h4> {kfc.cusines.join(",")} </h4>
            </div>
        );
    };
    const Body =() => {
        return (
            <div className="restrauntList"> 
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
                <RestrauntCard />
            </div>
        );
    };
    const Footer= () => {
        return <h4> Footer</h4>
    }
    const AppLayout= () => {
        return (
        <React.Fragment> 
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
        );
};

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);