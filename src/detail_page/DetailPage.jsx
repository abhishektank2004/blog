import React from 'react';

function DetailPage() {
  const sections = [
    {
      title: "Best Practices for AWS Cost Optimization",
      content: `Azure cost optimization is an approach for managing costs on the Azure platform. The aim is to save money while getting the most out of its cloud capabilities. Azure users practice different combinations of cost optimization techniques. Don’t just go for the widely used or best practices. Adopt the ones that can truly fulfill your project requirements.`,
    },
    {
      title: "Best Practices for AWS Cost Optimization",
      content: `Cost optimization also demands a complete system analysis to report the usage patterns, trends, and inefficiencies of the system. After all, Azure cost optimization is also about checking whether all resources are performing optimally or not. With this data, you can easily eliminate all the unnecessary expenses on your Azure platform.`,
    }
  ];

  return (
    <>
      <header className="text-center">
        <h1>AWS Cost Optimization Best Practices</h1>
        <h5>Last Updated on 12/12/1212</h5>
      </header>

      {/* Shared Image Container */}
      <div className="image-container">
        <img
          src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
          alt="AWS Cost Optimization Landscape"
          className="shared-image"
        />
      </div>

      {/* Dynamic Section Rendering */}
      {sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </>
  );
}

export default DetailPage;
