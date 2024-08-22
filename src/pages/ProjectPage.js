import React from "react";

function ProjectPage() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>
        <strong>PrivyTrack</strong> - A privacy-first period-tracking app built with a modern tech stack including Expo, Realm (MongoDB), and the Atlas Device SDK. By leveraging Realm's local-first database and synchronized data storage capabilities, the app ensures sensitive user data is stored securely on-device, with flexible privacy settings. PrivyTrack provides advanced cycle tracking, symptom analysis, and user-controlled data management to meet privacy concerns in the post-Roe v. Wade landscape. Test the MVP via TestFlight: 
        <a href="https://testflight.apple.com/join/dG7LE37O" target="_blank" rel="noopener noreferrer">
          https://testflight.apple.com/join/dG7LE37O
        </a>.
      </p>
    </div>
  );
}

export default ProjectPage;
