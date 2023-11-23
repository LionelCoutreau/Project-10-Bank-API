import './index.scss';

const FeatureItem = (featureObj) => {
    console.log(featureObj)
    return (
        <div className="feature-item">
            <img src={`../../assets/${featureObj.icon}`} alt={featureObj.iconAlt} className="feature-icon" />
            <h3 className="feature-item-title">{featureObj.title}</h3>
            <p>{featureObj.description}</p>
        </div>
    )
}

export default FeatureItem