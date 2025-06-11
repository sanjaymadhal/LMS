import React from 'react';


export default function VirtualClassroom() {
  
  const overallStats = [
    {
      icon: '📚',
      value: '3',
      label: 'Enrolled Classes',
      color: '#3b82f6'
    },
    {
      icon: '📈',
      value: '3.7',
      label: 'Overall GPA',
      color: '#10b981'
    },
    {
      icon: '👥',
      value: '92%',
      label: 'Avg Attendance',
      color: '#8b5cf6'
    },
    {
      icon: '🎯',
      value: '26',
      label: 'Assignments Done',
      color: '#f59e0b'
    }
  ];

  const classes = [
    {
      id: 'CS101',
      title: 'CS101: Intro to Programming',
      instructor: 'Dr. Sarah Johnson',
      description: 'Learn fundamental programming concepts using Python',
     
      gradeColor: '#3b82f6',
      dotColor: '#3b82f6',
      progress: 75,
      progressColor: '#3b82f6',
      assignments: 8,
      attendance: '92%',
      classmates: 45,
      nextClass: 'Tomorrow 10:00 AM'
    },
    {
      id: 'MATH202',
      title: 'MATH202: Advanced Calculus',
      instructor: 'Prof. Michael Chen',
      description: 'Advanced mathematical concepts and applications',

      gradeColor: '#10b981',
      dotColor: '#10b981',
      progress: 68,
      progressColor: '#10b981',
      assignments: 12,
      attendance: '88%',
      classmates: 32,
      nextClass: 'Monday 2:00 PM'
    },
    {
      id: 'PHYS101',
      title: 'PHYS101: Introduction to Physics',
      instructor: 'Dr. Emily Rodriguez',
      description: 'Fundamental principles of physics and mechanics',
    
      gradeColor: '#f59e0b',
      dotColor: '#f59e0b',
      progress: 82,
      progressColor: '#f59e0b',
      assignments: 6,
      attendance: '95%',
      classmates: 38,
      nextClass: 'Wednesday 11:00 AM'
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0'
    },
    statIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      display: 'block'
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1e293b',
      margin: '0.5rem 0'
    },
    statLabel: {
      color: '#64748b',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    classesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '1.5rem'
    },
    classCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    gradeSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%'
    },
    grade: {
      backgroundColor: '#f1f5f9',
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: '#334155'
    },
    classTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '0.5rem'
    },
    instructor: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    },
    description: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginBottom: '1.5rem',
      lineHeight: '1.5'
    },
    progressSection: {
      marginBottom: '1.5rem'
    },
    progressLabel: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    progressContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    progressBar: {
      flex: 1,
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 0.3s ease'
    },
    progressText: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#64748b',
      minWidth: '35px'
    },
    statsRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '0.25rem'
    },
    statText: {
      fontSize: '0.75rem',
      color: '#64748b'
    },
    nextClass: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      color: '#64748b',
      fontSize: '0.875rem'
    },
    button: {
      backgroundColor: '#1e293b',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '0.875rem 1.5rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      marginTop: 'auto',
      transition: 'background-color 0.2s ease'
    }
  };

  return (
    
    <div style={styles.container}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 8px 0'
        }}>
          Student Dashboard
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          margin: 0
        }}>
          Welcome back,CHAMP! Track classroom engagement and earn rewards.
        </p>
      </div>
      {/* Overall Stats */}
      <div style={styles.statsGrid}>
        {overallStats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <span style={styles.statIcon}>{stat.icon}</span>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
      

      {/* Class Cards */}
      <div style={styles.classesGrid}>
        {classes.map((classItem) => (
          <div key={classItem.id} style={styles.classCard}>
            {/* Header */}
            <div style={styles.cardHeader}>
              <div style={styles.gradeSection}>
                <div 
                  style={{
                    ...styles.dot,
                    backgroundColor: classItem.dotColor
                  }}
                />
                <span style={styles.grade}>{classItem.grade}</span>
              </div>
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: classItem.gradeColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.125rem',
                  fontWeight: 'bold'
                }}
              >
                {classItem.grade}
              </div>
            </div>

            {/* Class Info */}
            <h3 style={styles.classTitle}>{classItem.title}</h3>
            <p style={styles.instructor}>{classItem.instructor}</p>
            <p style={styles.description}>{classItem.description}</p>

            {/* Progress */}
            <div style={styles.progressSection}>
              <div style={styles.progressLabel}>Progress</div>
              <div style={styles.progressContainer}>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${classItem.progress}%`,
                      backgroundColor: classItem.progressColor
                    }}
                  />
                </div>
                <span style={styles.progressText}>{classItem.progress}%</span>
              </div>
            </div>

            {/* Stats */}
            <div style={styles.statsRow}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{classItem.assignments}</div>
                <div style={styles.statText}>Assignments</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{classItem.attendance}</div>
                <div style={styles.statText}>Attendance</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{classItem.classmates}</div>
                <div style={styles.statText}>Classmates</div>
              </div>
            </div>

            {/* Next Class */}
            <div style={styles.nextClass}>
              <span>🕐</span>
              <span>Next class: {classItem.nextClass}</span>
            </div>

            {/* Button */}
            <button 
              style={styles.button}
              onMouseOver={(e) => e.target.style.backgroundColor = '#374151'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#1e293b'}
            >
              View Class Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}