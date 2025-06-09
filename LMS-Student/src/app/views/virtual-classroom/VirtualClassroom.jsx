import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar,
  Chip,
  LinearProgress,
  IconButton,
  Divider
} from '@mui/material';
import {
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  Schedule as ScheduleIcon,
  EmojiEvents as TrophyIcon,
  CheckCircle as CheckIcon,
  LocalFireDepartment as FireIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  MenuBook as BookIcon,
  Chat as ChatIcon
} from '@mui/icons-material';

export default function StudentDashboard() {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const streakData = [true, true, true, true, true, false, false];
  
  return (
    <Box sx={{
      padding: 3,
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h3" sx={{
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 1
        }}>
          My Classroom
        </Typography>
        <Typography variant="h6" sx={{
          color: '#666',
          fontWeight: 'normal'
        }}>
          Welcome back, Alex! Keep learning and earning rewards.
        </Typography>
      </Box>

      {/* Top Stats Cards */}
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        {/* Enrolled Courses */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Enrolled Courses
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    5
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    3 active this semester
                  </Typography>
                </Box>
                <SchoolIcon sx={{ fontSize: 40, color: '#2196f3' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Achievements */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Achievements
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    8/15
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Badges earned
                  </Typography>
                </Box>
                <TrophyIcon sx={{ fontSize: 40, color: '#ffc107' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Today's Classes */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Today's Classes
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Next: Physics (11:00 AM)
                  </Typography>
                </Box>
                <ScheduleIcon sx={{ fontSize: 40, color: '#4caf50' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Assignments */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Pending Tasks
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    3
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Due this week
                  </Typography>
                </Box>
                <AssignmentIcon sx={{ fontSize: 40, color: '#9c27b0' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
                Recent Activity
              </Typography>
              
              <Box sx={{ marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 1 }}>
                  <Avatar sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#4caf50',
                    marginRight: 2,
                    marginTop: 0.5
                  }}>
                    <CheckIcon sx={{ fontSize: 12 }} />
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                      Quiz Completed
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      You scored 92% on the "Algebra Fundamentals" quiz.
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      2 hours ago
                    </Typography>
                  </Box>
                  <Chip
                    label="+30 XP"
                    size="small"
                    sx={{
                      backgroundColor: '#e8f5e8',
                      color: '#4caf50',
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 1 }}>
                  <Avatar sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#ffc107',
                    marginRight: 2,
                    marginTop: 0.5
                  }}>
                    <TrophyIcon sx={{ fontSize: 12 }} />
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                      Badge Unlocked
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                      You earned the "Quiz Champion" badge for scoring above 90%!
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      1 day ago
                    </Typography>
                  </Box>
                  <Chip
                    label="+50 XP"
                    size="small"
                    sx={{
                      backgroundColor: '#fff3e0',
                      color: '#ff9800',
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
              </Box>

              <Button
                fullWidth
                variant="text"
                sx={{ color: '#2196f3', textTransform: 'none' }}
              >
                View All Activities
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Learning Streak */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Your Learning Streak
                </Typography>
                <Button variant="text" size="small" sx={{ color: '#2196f3', textTransform: 'none' }}>
                  What's This?
                </Button>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                    <FireIcon sx={{ color: '#ff5722', marginRight: 1, fontSize: 24 }} />
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>5</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Current streak
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    18 days
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    Longest streak
                  </Typography>
                  <TrophyIcon sx={{ color: '#9c27b0', fontSize: 20 }} />
                </Box>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Last 7 days
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                {weekDays.map((day, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ marginBottom: 1, display: 'block' }}>
                      {day}
                    </Typography>
                    <Box sx={{ marginTop: 1 }}>
                      {streakData[index] ? (
                        <FireIcon sx={{ color: '#ff5722', fontSize: 20 }} />
                      ) : (
                        <Box sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: '#e0e0e0',
                          margin: '0 auto'
                        }} />
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
              
              <Typography variant="caption" color="text.secondary" sx={{ marginBottom: 2, display: 'block' }}>
                Last active: Today
              </Typography>

              <Button
                fullWidth
                variant="contained"
                startIcon={<FireIcon />}
                sx={{
                  backgroundColor: '#ff5722',
                  '&:hover': { backgroundColor: '#d84315' },
                  textTransform: 'none',
                  fontWeight: 'bold'
                }}
              >
                Keep your streak alive!
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Badges & Achievements */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
                Badges & Achievements
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card sx={{ backgroundColor: '#e8f5e8', textAlign: 'center', padding: 2 }}>
                    <StarIcon sx={{ fontSize: 30, marginBottom: 1 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 0.5 }}>
                      Quiz Champion
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#4caf50' }}>
                      Unlocked
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ backgroundColor: '#e3f2fd', textAlign: 'center', padding: 2 }}>
                    <TrendingUpIcon sx={{ fontSize: 30, marginBottom: 1 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 0.5 }}>
                      Fast Learner
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#2196f3' }}>
                      Unlocked
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ backgroundColor: '#f3e5f5', textAlign: 'center', padding: 2 }}>
                    <BookIcon sx={{ fontSize: 30, marginBottom: 1 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 0.5 }}>
                      Study Streak
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ marginBottom: 1, display: 'block' }}>
                      60%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={60}
                      sx={{
                        backgroundColor: '#e1bee7',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#9c27b0'
                        }
                      }}
                    />
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Card sx={{ backgroundColor: '#fff3e0', textAlign: 'center', padding: 2 }}>
                    <ChatIcon sx={{ fontSize: 30, marginBottom: 1 }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', marginBottom: 0.5 }}>
                      Class Participant
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ marginBottom: 1, display: 'block' }}>
                      85%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={85}
                      sx={{
                        backgroundColor: '#ffe0b2',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#ff9800'
                        }
                      }}
                    />
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}