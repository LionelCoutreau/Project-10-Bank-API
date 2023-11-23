import features from "../../datas/features.json"
import FeatureItem from '../FeatureItem'

import './index.scss';

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.forEach(feature => {
                return (
                    <FeatureItem key={feature.id} featureObj={feature} />
                )
            })}
        </section>
    )
}

export default Features