import React, { useState } from 'react';
import Button from '../components/Button';   // Correct import

const Profile = () => {
  const [companyDetails, setCompanyDetails] = useState({
    name: 'My Company',
    email: 'contact@company.com',
    wallet: '0x123456789abcdef',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleUpdate = () => {
    // Update profile logic here
    alert('Profile updated!');
  };

  return (
    <div className="profile">
      <h1>Company Profile</h1>
      <div>
        <label>Company Name: </label>
        <input
          type="text"
          value={companyDetails.name}
          onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={companyDetails.email}
          onChange={(e) => setCompanyDetails({ ...companyDetails, email: e.target.value })}
        />
      </div>
      <div>
        <label>Wallet Address: </label>
        <input
          type="text"
          value={companyDetails.wallet}
          onChange={(e) => setCompanyDetails({ ...companyDetails, wallet: e.target.value })}
        />
      </div>
      <div className="notification-settings">
        <h2>Notification Settings</h2>
        <label>
          <input
            type="checkbox"
            checked={notificationSettings.emailNotifications}
            onChange={(e) => setNotificationSettings({ ...notificationSettings, emailNotifications: e.target.checked })}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={notificationSettings.smsNotifications}
            onChange={(e) => setNotificationSettings({ ...notificationSettings, smsNotifications: e.target.checked })}
          />
          SMS Notifications
        </label>
      </div>
      <Button text="Update Profile" onClick={handleUpdate} />
    </div>
  );
};

export default Profile;
