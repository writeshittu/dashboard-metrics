import { Card } from "./styles";

const MetricsCard = ({ label, value,primary, change,icon }) => {
  
  return (
    <Card primaryBlue={primary}>
      <div className="label">{label}</div>
      <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",marginTop:'12px'}}>
      <div className="value">{value}</div>
      <div className="change">{change} {icon}</div>
      </div>
    </Card>
  );
};

export default MetricsCard;