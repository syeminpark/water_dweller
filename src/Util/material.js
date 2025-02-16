function createConvexMaterial() {
    return new THREE.MeshPhysicalMaterial({
        transmission: 0.9,
        thickness: 1,
        roughness: 0.3,
        clearcoat: 1,
        metalness: 0,
        clearcoatRoughness: 0,
    })
}

function createGlassMaterial() {
    return new THREE.MeshPhysicalMaterial({
        transmission: 0.99,
        thickness: 1,
        roughness: 0,
        clearcoat: 1,
        metalness: 0.4,
        clearcoatRoughness: 1,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,

    })
}

function createPointMaterial() {
    return new THREE.PointsMaterial({
        color: 'white',
        size: 0.3,
        side: THREE.DoubleSide,

    });
}


function createStandardMaterial() {
    return new THREE.MeshStandardMaterial({
        color: 'white',
        transparent: true,
        depthWrite:true,
        depthTest:true,
        opacity: 0.5,
        metalness: 0.3,
        roughness: 0.1,
        side: THREE.DoubleSide,
    });
}

