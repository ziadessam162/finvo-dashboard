import Card from "../../ui/Card";
import ValueState from "../../ui/ValueState";

import styles from "./StatCard.module.css";

const StatCard = ({ title, value, stat }) => {
  return (
    <Card>
      <div className={styles.stat_card}>
        <h3>{title}</h3>
        <h2>{value}</h2>
        <ValueState
          value={stat.value}
          decrease={stat.decrease}
          increase={stat.increase}
        />
      </div>
    </Card>
  );
};

export default StatCard;
