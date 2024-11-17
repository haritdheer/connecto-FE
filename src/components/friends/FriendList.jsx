import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export const FriendsList = () => {
  const [friends] = useState([
    {
      id: 1,
      name: 'Sarah Wilson',
      image: 'https://images.unsplash.com/photo-1719324464120-5c744bd7c0bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 15
    },
    {
      id: 2,
      name: 'Mike Johnson',
      image: 'https://plus.unsplash.com/premium_photo-1671823916571-e32e9ae2c083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 8
    },
    {
      id: 3,
      name: 'Emma Thompson',
      image: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      mutualFriends: 12
    }
  ]);

  return (
    <div>
      <h4 className="mb-4">All Friends ({friends.length})</h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px' 
      }}>
        {friends.map(friend => (
          <Card key={friend.id} className="border-0 shadow-sm">
            <div style={{ 
              height: '200px', 
              overflow: 'hidden',
              borderTopLeftRadius: 'calc(0.375rem - 1px)',
              borderTopRightRadius: 'calc(0.375rem - 1px)'
            }}>
              <img 
                src={friend.image} 
                alt={friend.name}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="mb-1">{friend.name}</Card.Title>
              <p className="text-muted small mb-3">
                {friend.mutualFriends} mutual friends
              </p>
              <Button 
                variant="danger" 
                className="w-100"
                style={{
                  backgroundColor: '#dc3545',
                  borderColor: '#dc3545'
                }}
              >
                Unfriend
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};