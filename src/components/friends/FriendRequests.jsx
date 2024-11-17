import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const FriendRequests = () => {
    const navigate = useNavigate();
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Ocean paul',
      image: 'https://images.unsplash.com/photo-1686397141317-4f470cbc5dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 5,
      isConfirmed: false
    },
    {
      id: 2,
      name: 'Nature Lover',
      image: 'https://images.unsplash.com/photo-1566577134657-a8b2da3b4dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 3,
      isConfirmed: false
    },
    {
      id: 3,
      name: 'Foodie',
      image: 'https://images.unsplash.com/photo-1659640913169-31d1e0fbfe1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 8,
      isConfirmed: false
    },
    {
      id: 4,
      name: 'Travel Bug',
      image: 'https://plus.unsplash.com/premium_photo-1680503587331-d8d4f8047393?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 6,
      isConfirmed: false
    }
  ]);

  const handleConfirm = (id) => {
    setRequests(requests.map(request =>
      request.id === id
        ? { ...request, isConfirmed: true }
        : request
    ));
  };

  const handleDelete = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleViewProfile = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const pendingRequests = requests.filter(request => !request.isConfirmed);

  return (
    <div>
      <h4 className="mb-4">Friend Requests ({pendingRequests.length})</h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px' 
      }}>
        {requests.map(request => (
          <Card key={request.id} className="border-0 shadow-sm">
            <div style={{ 
              height: '200px', 
              overflow: 'hidden',
              borderTopLeftRadius: 'calc(0.375rem - 1px)',
              borderTopRightRadius: 'calc(0.375rem - 1px)'
            }}>
              <img 
                src={request.image} 
                alt={request.name}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="mb-1">{request.name}</Card.Title>
              <p className="text-muted small mb-3">
                {request.mutualFriends} mutual friends
              </p>
              {request.isConfirmed ? (
                <>
                  <p className="text-muted mb-3">You are now friends</p>
                  <Button 
                    variant="light"
                    className="w-100"
                    onClick={() => handleViewProfile(request.id)}
                    style={{
                      backgroundColor: '#e7f3ff',
                      color: '#1877f2',
                      borderColor: 'transparent'
                    }}
                  >
                    View profile
                  </Button>
                </>
              ) : (
                <div className="d-flex flex-column gap-2">
                  <Button 
                    variant="primary"
                    onClick={() => handleConfirm(request.id)}
                    style={{
                      backgroundColor: '#1877f2',
                      borderColor: '#1877f2'
                    }}
                  >
                    Confirm
                  </Button>
                  <Button 
                    variant="light"
                    onClick={() => handleDelete(request.id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};