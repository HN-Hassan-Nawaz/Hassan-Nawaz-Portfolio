import Spline from '@splinetool/react-spline';

export default function SplineScene() {
    return (
        <div style={{
            position: 'fixed',
            inset: 0, // shorthand for top: 0, right: 0, bottom: 0, left: 0
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            top: 20,
        }}>
            <Spline
                scene="https://prod.spline.design/ajzKJdWHWo2UxYhX/scene.splinecode"
            />
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // optional dark overlay
                backdropFilter: 'blur(2px)'           // optional blur for readability
            }}></div>
        </div>
    );
}
