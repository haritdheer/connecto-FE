// src/pages/UserProfile.jsx
import { useEffect, useState } from 'react';
import { Container, Card, Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: userId,
    name: 'Lily',
    location: 'Australia',
    profilePicture: 'https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=1964&auto=format&fit=crop',
    posts: [
      {
        id: 1,
        date: '2 June 2024',
        content: 'There is nothing more beautiful than enjoying the nature',
        images: [
          'https://images.unsplash.com/photo-1488272690691-2636704d6000?q=80&w=2067&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1659640913169-31d1e0fbfe1a?q=80&w=1780&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?q=80&w=1780&auto=format&fit=crop'
        ],
        likes: 44,
        isLiked: false
      }
    ]
  });

  const handleLike = (postId) => {
    setUser(prevUser => ({
      ...prevUser,
      posts: prevUser.posts.map(post =>
        post.id === postId
          ? { 
              ...post, 
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked 
            }
          : post
      )
    }));
  };

  return (
    <>
      <Header />
      <Container className="py-4">
        {/* Profile Header */}
        <Card className="mb-4">
          <div style={{ 
            height: '200px', 
            backgroundColor: '#f0f2f5',
            position: 'relative'
          }}>
            <Image
              src={user.profilePicture}
              style={{
                width: '168px',
                height: '168px',
                border: '4px solid white',
                borderRadius: '50%',
                position: 'absolute',
                bottom: '-20px',
                left: '24px'
              }}
            />
          </div>
          <Card.Body style={{ paddingTop: '32px', paddingLeft: '220px' }}>
            <h3 className="mb-1">{user.name}</h3>
            <p className="text-muted mb-0">
              is in {user.location}
            </p>
          </Card.Body>
        </Card>

        {/* Posts */}
        <div className="d-flex gap-4">
          {/* Left Sidebar - Could add more profile info here */}
          <div style={{ width: '360px' }}>
            <Card>
              <Card.Body>
                <h5 className="mb-3">About</h5>
                <p className="text-muted mb-0">Lives in {user.location}</p>
              </Card.Body>
            </Card>
          </div>

          {/* Posts Feed */}
          <div className="flex-grow-1">
            {user.posts.map(post => (
              <Card key={post.id} className="mb-4">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <Image 
                      src={user.profilePicture}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        marginRight: '12px'
                      }}
                    />
                    <div>
                      <h6 className="mb-0">{user.name} is in {user.location}</h6>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  
                  <p className="mb-3">{post.content}</p>

                  <div className="d-flex gap-2 mb-3">
                    {post.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image}
                        alt={`Post image ${index + 1}`}
                        style={{
                          width: 'calc(33.333% - 8px)',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <span>{post.likes} likes</span>
                  </div>

                  <hr />

                  <Button 
                    variant={post.isLiked ? "primary" : "light"}
                    className="d-flex align-items-center gap-2"
                    onClick={() => handleLike(post.id)}
                  >
                    👍 {post.isLiked ? 'Liked' : 'Like'}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div style={{ width: '300px' }}>
            <Card className="mb-4">
              <Card.Body>
                <h6 className="mb-3">Sponsored Ad</h6>
                <div className="mb-3">
                  <img 
                    src="https://via.placeholder.com/250x150"
                    alt="Ad"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                  <div className="mt-2">
                    <h6 className="mb-1">Upgrade Your Wardrobe</h6>
                    <small className="text-muted">DennisJeans.com</small>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://via.placeholder.com/250x150"
                    alt="Ad"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                  <div className="mt-2">
                    <h6 className="mb-1">Organic Advanced Cosmetics</h6>
                    <small className="text-muted">OrganicAll.com</small>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h6 className="mb-3">Popular Groups</h6>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Image 
                    src="https://via.placeholder.com/40"
                    roundedCircle
                    width={40}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0">World Animal Care Committee</h6>
                  </div>
                  <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }} />
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Image 
                    src="https://via.placeholder.com/40"
                    roundedCircle
                    width={40}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0">Popular Series</h6>
                  </div>
                  <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }} />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;