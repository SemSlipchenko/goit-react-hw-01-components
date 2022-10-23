import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistitcs = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}
      {/* <h2 class="title">Upload stats</h2> */}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistitcs.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
