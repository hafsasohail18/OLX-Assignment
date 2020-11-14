import React, { Component } from 'react';

class FooterCategories extends Component {
    render () {
        return (
            <div className="container-fluid background-color">
            <table className="table-style">
  <tr>
    <th className="bold">POPULAR CATEGORIES</th>
    <th className="bold">TRENDING SEARCHES</th>
    <th className="bold">ABOUT US</th>
    <th className="bold">OLX</th>
  </tr>
  <tr>
    <td className="color-gray">Cars</td>
    <td className="color-gray">Bikes</td>
    <td className="color-gray">About OLX Group</td>
    <td className="color-gray">Help</td>
  </tr>
  <tr>
    <td className="color-gray">Flats for rent</td>
    <td className="color-gray">Watches</td>
    <td className="color-gray">OLX Blog</td>
    <td className="color-gray">Sitemap</td>
  </tr>
  <tr>
    <td className="color-gray">Jobs</td>
    <td className="color-gray">Books</td>
    <td className="color-gray">Contact Us</td>
    <td className="color-gray">Legal and Privacy information</td>
  </tr>
  <tr>
    <td className="color-gray">Mobile Phones</td>
    <td className="color-gray">Dogs</td>
    <td className="color-gray">OLX for Businesses</td>
  </tr>
 
  </table>
</div>
             
        )
    }
}

class Icons extends Component {
    render(){
        return (
            <div>
               <h3 className="follow-text">FOLLOW US</h3> 
            <div className="inline-icon">
                <i class='fab fa-facebook-f'></i>
                <i class='fab fa-twitter'></i>
                <i class='fab fa-youtube'></i>
                <i class='fab fa-instagram'></i>


            </div>
            </div>
        )
    }
}


class Copyright extends Component {
  render(){
    return (
      <div className="container-fluid bg-copyright">
        <footer>
        <p style={{color:"white",fontSize:"13px",textAlign:"center"}}><span style={{fontWeight:"bold", margin:"10px"}}>Other countires</span>India-South Africa-Indonesia<span style={{textAlign:"right",margin:"300px"}}>Free Classifieds in Pakistan. © 2006-2020 OLX</span></p>
        </footer>
      </div>
    )

  }
}

class Footer extends Component {
    render() {
        return (
         <div>
            <div className="container-fluid footer-inline background-color">
                <FooterCategories></FooterCategories>
                <Icons></Icons>
                </div>
                <div>
                <Copyright></Copyright>
            </div>
            </div>
        );
    }
}

export default Footer;