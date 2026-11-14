function NotificationList({ notifications }) {
  return (
    <ul className="notification-list">
      {notifications.map(({ id, type, message }) => {
        const icon = type === 'success' ? '✓' : type === 'warning' ? '!' : 'i';
        return (
          <li className={`notification notification-${type}`} key={id}>
            <span className="notification-icon" aria-hidden="true">{icon}</span>
            <span>{message}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default NotificationList;
