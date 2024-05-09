import React from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from 'prop-types';
import './AwardCard.css';

const AwardCard = ({ item, width, onClick }) => {
    const handleMoreVertClick = () => {
        // Add your logic for MoreVertIcon click here
        console.log("MoreVertIcon clicked");
    };

    return (
        <div className="card-container" style={{width}}>
            <div className="card-brand">
                <p>{item.brandName}</p>
                <div onClick={handleMoreVertClick}>
                    <MoreVertIcon className="card-icon" />
                </div>
            </div>
            <h2 className="card-title">{item.title}</h2>
            <div className="card-department">
                <p>{item.department}</p>
                <p>{item.position}</p>
            </div>
        </div>
    );
};

// PropType definitions
AwardCard.propTypes = {
    /**
     * Data object representing the award item
     */
    item: PropTypes.shape({
        brandName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        subCategory: PropTypes.string.isRequired
    }),
    width: PropTypes.string,
    /**
     * Optional click handler for MoreVertIcon
     */
    onClick: PropTypes.func,
};

// Default props
AwardCard.defaultProps = {
    item: null,
    width: '100%',
    onClick: () => {}, // Default empty function
};

export default AwardCard;
