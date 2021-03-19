import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
//import portfolios from '../Components/allportfolios';
import portfolios from '../Components/allprojects';
import portfoliosdone from '../Components/doneprojects';
import portfoliosdoing from '../Components/doingprojects';
import { useState } from 'react';
import Mp from '../img/portImages/VehicleStopper.mp4';

const allCategories = ['All','done','ongoing',...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        else if(category === 'done'){
            setMenuItems(portfoliosdone)
            return;
        }
        else if(category === 'ongoing'){
            setMenuItems(portfoliosdoing)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);

        
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projects'} span={'Projects'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
                <br />
                <div className="title">
                <Tittle title={'Video'}  span={'Videos'} />
            </div>
            <br />
                
                    
                
            </div>
            <video width = "100%" height="240" controls>
  <source src={Mp} type="video/mp4" />
  
  Your browser does not support the video tag.
</video>

        </div>
    )
}

export default PortfoliosPage;
