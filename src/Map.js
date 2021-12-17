import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
    const mapContainerRef = useRef(null);
    var [map, setMap] = useState(null);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [-122.0231971, 37.40994741],
            zoom: 16
        });

        setMap(map)
        // Clean up on unmount
        return () => map.remove();
    }, []);

    return (
        <div>
            <div ref={mapContainerRef} className='map-container' />
        </div>
    );
};

export default Map;