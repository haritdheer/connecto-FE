// src/pages/Friends.jsx
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import { FindFriends } from '../components/friends/Findfriends';
import { FriendRequests } from '../components/friends/FriendRequests';
import { FriendsList } from '../components/friends/FriendList';

const Friends = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(
      location.pathname === '/friends/requests' ? 'requests' :
      location.pathname === '/friends/all' ? 'all' : 'find'
    );
  
    // Mock data with real images
    const suggestedFriends = [
      {
        id: 1,
        name: 'Lily',
        image: 'https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
        profession: 'Florist'
      },
      {
        id: 2,
        name: 'Kris kellers',
        image: 'https://images.unsplash.com/photo-1488272690691-2636704d6000?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3',
        profession: 'Theater Artist'
      },
      {
        id: 3,
        name: 'Dr G',
        image: 'https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
        profession: 'Doctor'
      }
    ];
  
    const renderContent = () => {
      switch (activeTab) {
        case 'requests':
          return <FriendRequests />;
        case 'all':
          return <FriendsList />;
        default:
          return <FindFriends friends={suggestedFriends} />;
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container-fluid">
          <div style={{ 
            display: 'flex',
            gap: '24px',
            padding: '24px'
          }}>
            {/* Left Sidebar */}
            <div style={{ 
              width: '320px', 
              position: 'sticky',
              top: '80px',
              height: 'fit-content'
            }}>
              <Card>
                <Card.Body>
                  <h4 className="mb-4">Friends</h4>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    <Link 
                      to="/friends"
                      onClick={() => setActiveTab('find')}
                      className={`text-decoration-none d-flex align-items-center gap-2 ${
                        activeTab === 'find' ? 'text-primary fw-bold' : 'text-dark'
                      }`}
                    >
                      <i className="bi bi-people-fill"></i>
                      Find new friends
                    </Link>
                    <Link 
                      to="/friends/requests"
                      onClick={() => setActiveTab('requests')}
                      className={`text-decoration-none d-flex align-items-center gap-2 ${
                        activeTab === 'requests' ? 'text-primary fw-bold' : 'text-dark'
                      }`}
                    >
                      <i className="bi bi-person-plus-fill"></i>
                      Friend requests
                    </Link>
                    <Link 
                      to="/friends/all"
                      onClick={() => setActiveTab('all')}
                      className={`text-decoration-none d-flex align-items-center gap-2 ${
                        activeTab === 'all' ? 'text-primary fw-bold' : 'text-dark'
                      }`}
                    >
                      <i className="bi bi-people"></i>
                      All friends
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
  
            {/* Main Content - Taking remaining width */}
            <div style={{ flex: 1 }}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Friends;