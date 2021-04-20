import React from 'react';
import DoctorNav from '../../src/DoctorProfiles/DoctorNav/DoctorNav';
import DoctorHome from '../../src/DoctorProfiles/DoctorHome/DoctorHome';

export default function index() {
    return (
        <div>
            <DoctorNav />
            <DoctorHome />
        </div>
    )
}
