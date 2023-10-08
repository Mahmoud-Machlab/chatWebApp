// ArControl.js
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const ArControl = ({ firebaseConfig }) => {
    const [arPosition, setArPosition] = useState({ x: 0, y: 0, z: 0 });

    const databaseReference = ref(getDatabase(firebaseConfig), 'arObject');

    useEffect(() => {
        onValue(databaseReference, (snapshot) => {
            if(snapshot.exists()) {
                setArPosition(snapshot.val());
            }
        });
    }, [databaseReference]);

    const handlePositionChange = (axis, value) => {
        const newPosition = { ...arPosition, [axis]: value };
        setArPosition(newPosition);
        set(databaseReference, newPosition);
    };

    return (
        <div>
            <h1>AR Object Controls</h1>
            <div>
                <label>X Position:</label>
                <input 
                    type="range" 
                    min="-10" max="10" 
                    step="0.1" 
                    value={arPosition.x} 
                    onChange={(e) => handlePositionChange('x', parseFloat(e.target.value))} 
                />
            </div>
            <div>
                <label>Y Position:</label>
                <input 
                    type="range" 
                    min="-10" max="10" 
                    step="0.1" 
                    value={arPosition.y} 
                    onChange={(e) => handlePositionChange('y', parseFloat(e.target.value))} 
                />
            </div>
            <div>
                <label>Z Position:</label>
                <input 
                    type="range" 
                    min="-10" max="10" 
                    step="0.1" 
                    value={arPosition.z} 
                    onChange={(e) => handlePositionChange('z', parseFloat(e.target.value))} 
                />
            </div>
        </div>
    );
};

export default ArControl;
