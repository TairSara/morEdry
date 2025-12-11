import { useState, useEffect, useRef } from 'react';
import './WeeklyStory.css';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const WeeklyStory = ({ onClose }) => {
  const stories = [
    { type: 'image', src: '/images/story_first.jpeg' },
    { type: 'image', src: '/images/story1.jpeg' },
    { type: 'video', src: '/images/story1.1.mp4' },
    { type: 'image', src: '/images/story2.jpeg' },
    { type: 'image', src: '/images/story3.jpeg' },
    { type: 'video', src: '/images/story4.mp4' },
    { type: 'video', src: '/images/story5.mp4' },
    { type: 'video', src: '/images/story6.mp4' },
    { type: 'image', src: '/images/story7.jpeg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const currentStory = stories[currentIndex];
  const STORY_DURATION = 5000; // 5 seconds for images

  useEffect(() => {
    if (isPaused) return;

    if (currentStory.type === 'video') {
      const video = videoRef.current;
      if (video) {
        video.play();

        const updateProgress = () => {
          if (video.duration) {
            setProgress((video.currentTime / video.duration) * 100);
          }
        };

        const handleEnded = () => {
          nextStory();
        };

        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('ended', handleEnded);

        return () => {
          video.removeEventListener('timeupdate', updateProgress);
          video.removeEventListener('ended', handleEnded);
        };
      }
    } else {
      // Image story
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextStory();
            return 0;
          }
          return prev + (100 / (STORY_DURATION / 100));
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  useEffect(() => {
    setProgress(0);
    if (currentStory.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgress(0);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = 'סטורי שבועי - מוֹר אדרי';

    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
    }
  };

  const handleTouchStart = (e) => {
    // Don't trigger navigation if touching buttons or interactive elements
    if (e.target.closest('button') || e.target.closest('.story-share-buttons')) {
      return;
    }

    const touch = e.touches[0];
    const screenWidth = window.innerWidth;
    const touchX = touch.clientX;

    // Left side = next, Right side = previous (RTL layout)
    if (touchX < screenWidth / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  return (
    <>
      <div className="story-overlay" onTouchStart={handleTouchStart}>
        <div className="story-container">
          {/* Progress bars */}
          <div className="story-progress-bars">
            {stories.map((_, index) => (
              <div key={index} className="story-progress-bar">
                <div
                  className="story-progress-fill"
                  style={{
                    width: index < currentIndex ? '100%' :
                           index === currentIndex ? `${progress}%` : '0%'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="story-header">
            <div className="story-header-info">
              <img src="/images/MOR.webp" alt="Logo" className="story-avatar" />
              <div className="story-header-text">
                <span className="story-username">מוֹר אדרי</span>
                <span className="story-highlight-name">הסטורי השבועי</span>
              </div>
            </div>
            <button className="story-close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

        {/* Story content */}
        <div className="story-content">
          {currentStory.type === 'image' ? (
            <img
              src={currentStory.src}
              alt={`Story ${currentIndex + 1}`}
              className="story-media"
            />
          ) : (
            <video
              ref={videoRef}
              src={currentStory.src}
              className="story-media"
              playsInline
              muted={false}
            />
          )}
        </div>

        {/* Navigation buttons */}
        <button className="story-nav story-nav-prev" onClick={prevStory}>
          <FaChevronRight />
        </button>
        <button className="story-nav story-nav-next" onClick={nextStory}>
          <FaChevronLeft />
        </button>

        {/* Share buttons */}
        <div className="story-share-buttons">
          <button
            className="story-share-btn facebook"
            onClick={() => handleShare('facebook')}
            aria-label="שתף בפייסבוק"
          >
            <FaFacebookF />
          </button>
          <button
            className="story-share-btn twitter"
            onClick={() => handleShare('twitter')}
            aria-label="שתף בטוויטר"
          >
            <FaTwitter />
          </button>
          <button
            className="story-share-btn whatsapp"
            onClick={() => handleShare('whatsapp')}
            aria-label="שתף בוואטסאפ"
          >
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </div>

  </>
  );
};

export default WeeklyStory;
