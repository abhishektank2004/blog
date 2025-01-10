import React from 'react';

function DetailPage() {
  return (
    <>
      <header className="text-center">
        <h1>AWS Cost Optimization Best Practices</h1>
        <h5>Last Updated on 12/12/1212</h5>
      </header>

      {/* First Image with Banner */}
      <div className="image-container" style={{ marginLeft: '90px', marginRight: '50px' }}>
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <img
            src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
            alt="AWS Cost Optimization Landscape"
            className="shared-image"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              marginBottom: '10px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              padding: '20px 40px',
              fontSize: window.innerWidth < 768 ? '1rem' : '2rem',
              borderRadius: '10px',
            }}
          >
            AWS Cost Optimization Strategies
          </div>
        </div>
      </div>

      {/* First Section */}
      <div style={{ marginLeft: '90px', marginRight: '50px' }}>
        <h2>Best Practices for AWS Cost Optimization</h2>
        <p>
          Azure cost optimization is an approach for managing costs on the Azure platform. The aim is to save money while getting the most out of its cloud capabilities. Azure users practice different combinations of cost optimization techniques. Don’t just go for the widely used or best practices. Adopt the ones that can truly fulfill your project requirements.
        </p>
      </div>

      {/* Second Section */}
      <div style={{ marginLeft: '90px', marginRight: '50px' }}>
        <h2>Best Practices for Azure Cost Optimization</h2>
        <p>
          Cost optimization also demands a complete system analysis to report the usage patterns, trends, and inefficiencies of the system. After all, Azure cost optimization is also about checking whether all resources are performing optimally or not. With this data, you can easily eliminate all the unnecessary expenses on your Azure platform.
        </p>
      </div>
    </>
  );
}

export default DetailPage;
