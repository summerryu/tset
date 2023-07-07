import React, { useState } from 'react'
import logo from '../Ballantines-logo.svg'


function Header() {
    let [mainGnbList,setGnbList] = useState(
        [{
            gnbtitle:"전체상품",
            link:"/best"
        },
        {
            gnbtitle:"베스트상품",
            link:"/all"
        },
        {
            gnbtitle:"특가/신상품",
            link:"/event"
        }
        
    ]);

    let [rightGnbList,setRightGnbList] = useState(
        [{
            rightgnb:"회원가입"
        },
        {
            rightgnb:"로그인"
        },
        {
            rightgnb:"고객센터"
        }]
    )
  return (
    <div id="header">
        <div className="center">
            <div className="gnb">
                <h1><img src={logo}/></h1>
                <ul className='menu_main'>
                    {
                        mainGnbList.map((menu,idx)=>{
                            return(
                                <li key={idx}><a href={menu.link}>{menu.gnbtitle}</a></li>
                                )
                            }
                        )    
                    }
                </ul>
                <ul className='menu_right'>
                    {
                        rightGnbList.map((rightmenu,idx)=>{
                            return(
                                <li key={idx}><a href="#">{rightmenu.rightgnb}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header