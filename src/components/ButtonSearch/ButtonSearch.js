import './ButtonSearch.scss';
import SearchIcon from '../../assets/Icons/search.svg';


        //component of the navigation bar
        function ButtonSearch() {
            return (
              <div className="search__container">
                <span className= "search__container--display ">
                <input className="search-input" placeholder="Search" />
                <img src={SearchIcon} alt="Search Icon" className="search-icon"/></span>
                <div className="search-avatar"></div>
              </div>      
     

    );
  }
  
  export default ButtonSearch;
  