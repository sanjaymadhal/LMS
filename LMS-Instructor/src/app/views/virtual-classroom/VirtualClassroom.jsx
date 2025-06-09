import React from 'react';

export default function FacultyDashboard() {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const streakData = [true, true, true, true, true, false, false];
  
  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 8px 0'
        }}>
          Faculty Dashboard
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          margin: 0
        }}>
          Welcome back, Prof. Sarah! Track classroom engagement and earn rewards.
        </p>
      </div>

      {/* Top Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        {/* Total Students */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>Total Students</p>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0' }}>12</h2>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>Across 3 active classes</p>
            </div>
            <div style={{
              fontSize: '40px',
              color: '#2196f3'
            }}>👥</div>
          </div>
        </div>

        {/* Achievements */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>Achievements</p>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0' }}>12/20</h2>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>Badges unlocked</p>
            </div>
            <div style={{
              fontSize: '40px',
              color: '#ffc107'
            }}>🏆</div>
          </div>
        </div>

        {/* Today's Classes */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>Today's Classes</p>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0' }}>3</h2>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>Next: Data Structures (10:30 AM)</p>
            </div>
            <div style={{
              fontSize: '40px',
              color: '#4caf50'
            }}>📅</div>
          </div>
        </div>

        {/* Weekly Quizzes */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>Weekly Quizzes</p>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0' }}>8</h2>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>+14% from last week</p>
            </div>
            <div style={{
              fontSize: '40px',
              color: '#9c27b0'
            }}>✅</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '24px'
      }}>
        {/* Recent Activity */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 24px 0' }}>
            Recent Activity
          </h3>
          
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#4caf50',
                borderRadius: '50%',
                marginRight: '16px',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px'
              }}>✓</div>
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                  Quiz Completed
                </h4>
                <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>
                  You completed the "Database Concepts" quiz with 85% participation.
                </p>
                <p style={{ color: '#999', margin: 0, fontSize: '12px' }}>
                  2 hours ago
                </p>
              </div>
              <div style={{
                backgroundColor: '#e8f5e8',
                color: '#4caf50',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>+25 XP</div>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#ffc107',
                borderRadius: '50%',
                marginRight: '16px',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>🏆</div>
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                  Badge Unlocked
                </h4>
                <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>
                  You earned the "Quiz Master" badge for running 5 quizzes in a week!
                </p>
                <p style={{ color: '#999', margin: 0, fontSize: '12px' }}>
                  1 day ago
                </p>
              </div>
              <div style={{
                backgroundColor: '#fff3e0',
                color: '#ff9800',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>+50 XP</div>
            </div>
          </div>

          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#2196f3',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'medium'
          }}>
            View All Activities
          </button>
        </div>

        {/* Teaching Streak */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
              Your Teaching Streak
            </h3>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#2196f3',
              cursor: 'pointer',
              fontSize: '14px'
            }}>What's This?</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#ff5722', marginRight: '8px', fontSize: '24px' }}>🔥</span>
                <span style={{ fontSize: '32px', fontWeight: 'bold' }}>5</span>
              </div>
              <p style={{ color: '#666', margin: 0, fontSize: '14px' }}>
                Current streak
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
                12 days
              </h4>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>
                Longest streak
              </p>
              <span style={{ color: '#9c27b0', fontSize: '20px' }}>🏆</span>
            </div>
          </div>

          <h4 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
            Last 7 days
          </h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            {weekDays.map((day, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '12px' }}>
                  {day}
                </p>
                <div style={{ marginTop: '8px' }}>
                  {streakData[index] ? (
                    <span style={{ color: '#ff5722', fontSize: '20px' }}>🔥</span>
                  ) : (
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#e0e0e0',
                      margin: '0 auto'
                    }} />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <p style={{ color: '#999', margin: '0 0 16px 0', fontSize: '12px' }}>
            Last active: Today
          </p>

          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            🔥 Keep your streak alive!
          </button>
        </div>

        {/* Badges & Achievements */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 24px 0' }}>
            Badges & Achievements
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            <div style={{
              padding: '16px',
              textAlign: 'center',
              backgroundColor: '#e8f5e8',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>⭐</div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                Quiz Master
              </h4>
              <p style={{ color: '#4caf50', margin: 0, fontSize: '12px' }}>
                Unlocked
              </p>
            </div>

            <div style={{
              padding: '16px',
              textAlign: 'center',
              backgroundColor: '#e3f2fd',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>📈</div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                Engagement Pro
              </h4>
              <p style={{ color: '#2196f3', margin: 0, fontSize: '12px' }}>
                Unlocked
              </p>
            </div>

            <div style={{
              padding: '16px',
              textAlign: 'center',
              backgroundColor: '#f3e5f5',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>🎓</div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                Perfect Attendance
              </h4>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '12px' }}>
                75%
              </p>
              <div style={{
                width: '100%',
                height: '4px',
                backgroundColor: '#e1bee7',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '75%',
                  height: '100%',
                  backgroundColor: '#9c27b0'
                }} />
              </div>
            </div>

            <div style={{
              padding: '16px',
              textAlign: 'center',
              backgroundColor: '#fff3e0',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '8px' }}>💬</div>
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                Feedback Champion
              </h4>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '12px' }}>
                40%
              </p>
              <div style={{
                width: '100%',
                height: '4px',
                backgroundColor: '#ffe0b2',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '40%',
                  height: '100%',
                  backgroundColor: '#ff9800'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}