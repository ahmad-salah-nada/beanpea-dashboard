import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { ArrowUpRight, Cpu, Clock, GitBranch, Columns, Zap, Code, Package, Maximize, MinusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Sector } from 'recharts';

const performanceData = [
  { name: 'Traditional', time: 100 },
  { name: 'Beanpea', time: 20 },
];

const scalabilityData = [
  { cores: 1, speedup: 1 },
  { cores: 2, speedup: 1.8 },
  { cores: 3, speedup: 2.6 },
  { cores: 4, speedup: 3.3 },
  { cores: 5, speedup: 4.1 },
  { cores: 6, speedup: 5 },
];

const problemSizeData = [
  { size: '100', traditional: 10, beanpea: 2 },
  { size: '1K', traditional: 100, beanpea: 15 },
  { size: '10K', traditional: 1000, beanpea: 100 },
  { size: '100K', traditional: 10000, beanpea: 500 },
  { size: '1M', traditional: 100000, beanpea: 2000 },
];

const applicationData = [
  { name: 'Logistics', value: 30 },
  { name: 'Finance', value: 25 },
  { name: 'Supply Chain', value: 20 },
  { name: 'Scheduling', value: 15 },
  { name: 'Resource Allocation', value: 10 },
];

const featureComparisonData = [
  { feature: 'Performance', beanpea: 95, traditional: 60 },
  { feature: 'Scalability', beanpea: 90, traditional: 50 },
  { feature: 'Flexibility', beanpea: 85, traditional: 70 },
  { feature: 'Precision', beanpea: 95, traditional: 80 },
  { feature: 'Ease of Use', beanpea: 80, traditional: 75 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
      <header className="text-center mb-12">
        <motion.h1 
          className="text-5xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Beanpea Dashboard
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Next-Generation Parallel Branch and Price Framework in Rust
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <FeatureCard
          icon={Cpu}
          title="Parallel Processing"
          description="Efficiently divides and solves subproblems in parallel, reducing computation time."
        />
        <FeatureCard
          icon={Columns}
          title="Column Generation"
          description="Dynamically adds variables to the linear programming model, improving the solution iteratively."
        />
        <FeatureCard
          icon={GitBranch}
          title="Custom Branching Rules"
          description="Allows users to prioritize branching variables to optimize performance further."
        />
        <FeatureCard
          icon={Maximize}
          title="Cutting Planes"
          description="Enhances solution precision by adding intelligent constraints to the model."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Performance Improvement</h2>
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-yellow-500 mr-2" />
            <span className="text-4xl font-bold text-gray-800">
              <AnimatedCounter value="5" />x
            </span>
            <span className="text-xl text-gray-600 ml-2">faster</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="time" fill="#3b82f6" name="Solving Time (s)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Scalability</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={scalabilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cores" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="speedup" stroke="#3b82f6" name="Speedup" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div 
        className="bg-white rounded-lg shadow-md p-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Problem Size vs. Solving Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={problemSizeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="size" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="traditional" stroke="#ff7300" name="Traditional" />
            <Line type="monotone" dataKey="beanpea" stroke="#3b82f6" name="Beanpea" />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Application Areas</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={applicationData}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {applicationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Feature Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={featureComparisonData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="feature" />
              <Radar name="Beanpea" dataKey="beanpea" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Traditional" dataKey="traditional" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div 
        className="bg-white rounded-lg shadow-md p-6 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard icon={Code} title="Rust Implementation" description="High-performance, memory-safe language" />
          <FeatureCard icon={Package} title="Rayon Integration" description="Efficient data parallelism library" />
          <FeatureCard icon={Clock} title="Warm Start" description="Begin from near-optimal solutions" />
          <FeatureCard icon={MinusCircle} title="Cutting Planes" description="Enhance solution precision" />
          <FeatureCard icon={GitBranch} title="Custom Branching" description="Optimize search strategies" />
          <FeatureCard icon={Columns} title="Column Generation" description="Dynamic variable addition" />
        </div>
      </motion.div>

      <footer className="text-center text-gray-600">
        <p>© 2024 Beanpea Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default Dashboard;