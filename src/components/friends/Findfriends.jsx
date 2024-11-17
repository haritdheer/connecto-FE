// src/components/friends/FindFriends.jsx
import { Card, Button } from 'react-bootstrap';

export const FindFriends = ({ friends }) => {
  return (
    <div>
      <h4 className="mb-4">Find New Friends</h4>
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
              <p className="text-muted small mb-3">{friend.profession}</p>
              <Button 
                variant="primary" 
                className="w-100"
                style={{
                  backgroundColor: '#1877f2',
                  borderColor: '#1877f2'
                }}
              >
                Add friend
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};