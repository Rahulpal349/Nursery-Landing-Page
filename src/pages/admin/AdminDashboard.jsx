import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="header-title">
          <div className="title-with-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)" stroke="var(--primary-green)" strokeWidth="1">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"></path>
            </svg>
            <h2>Dashboard</h2>
          </div>
          <p>Welcome back, Admin! Here's what's happening with your store.</p>
        </div>
        <div className="date-picker">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>May 18 - May 24, 2024</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-title">Total Orders</span>
            <div className="stat-icon bg-light-green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
          </div>
          <h3 className="stat-value">128</h3>
          <div className="stat-footer">
            <span className="trend positive">↑ 18.6%</span>
            <span className="trend-text">vs last 7 days</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-title">Total Revenue</span>
            <div className="stat-icon bg-light-green">
              <span style={{color: 'var(--primary-green)', fontWeight: 'bold', fontSize: '16px'}}>₹</span>
            </div>
          </div>
          <h3 className="stat-value">₹ 45,680</h3>
          <div className="stat-footer">
            <span className="trend positive">↑ 22.4%</span>
            <span className="trend-text">vs last 7 days</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-title">Total Customers</span>
            <div className="stat-icon bg-light-green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
          <h3 className="stat-value">348</h3>
          <div className="stat-footer">
            <span className="trend positive">↑ 16.3%</span>
            <span className="trend-text">vs last 7 days</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <span className="stat-title">Total Plants</span>
            <div className="stat-icon bg-light-green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" strokeWidth="2">
                <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"></path>
              </svg>
            </div>
          </div>
          <h3 className="stat-value">72</h3>
          <div className="stat-footer">
            <span className="trend positive">↑ 8.7%</span>
            <span className="trend-text">vs last 7 days</span>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card sales-overview">
          <div className="chart-header">
            <h3>Sales Overview</h3>
            <button className="filter-btn">This Week</button>
          </div>
          <div className="mock-line-chart">
            {/* CSS Mock representation of the chart */}
            <div className="y-axis">
              <span>50K</span><span>40K</span><span>30K</span><span>20K</span><span>10K</span><span>0</span>
            </div>
            <div className="chart-area">
              <svg viewBox="0 0 500 200" preserveAspectRatio="none">
                <polyline fill="none" stroke="var(--primary-green)" strokeWidth="3" points="0,180 80,100 160,130 240,60 320,120 400,100 480,20" />
                <polygon fill="rgba(118, 184, 82, 0.1)" points="0,200 0,180 80,100 160,130 240,60 320,120 400,100 480,20 480,200" />
                
                {/* Data points */}
                <circle cx="0" cy="180" r="5" fill="var(--primary-green)" />
                <circle cx="80" cy="100" r="5" fill="var(--primary-green)" />
                <circle cx="160" cy="130" r="5" fill="var(--primary-green)" />
                <circle cx="240" cy="60" r="5" fill="var(--primary-green)" />
                <circle cx="320" cy="120" r="5" fill="var(--primary-green)" />
                <circle cx="400" cy="100" r="5" fill="var(--primary-green)" />
                <circle cx="480" cy="20" r="5" fill="var(--primary-green)" />
              </svg>
            </div>
            <div className="x-axis">
              <span>May 18</span><span>May 19</span><span>May 20</span><span>May 21</span><span>May 22</span><span>May 23</span><span>May 24</span>
            </div>
          </div>
        </div>

        <div className="chart-card order-status">
          <div className="chart-header">
            <h3>Order Status</h3>
          </div>
          <div className="donut-chart-container">
            <div className="donut-chart">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#fca5a5" strokeWidth="20" strokeDasharray="10 251" strokeDashoffset="0"></circle>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#86efac" strokeWidth="20" strokeDasharray="35 251" strokeDashoffset="-10"></circle>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#60a5fa" strokeWidth="20" strokeDasharray="55 251" strokeDashoffset="-45"></circle>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#fb923c" strokeWidth="20" strokeDasharray="90 251" strokeDashoffset="-100"></circle>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#76b852" strokeWidth="20" strokeDasharray="61 251" strokeDashoffset="-190"></circle>
              </svg>
              <div className="donut-center">
                <span className="donut-total">128</span>
                <span className="donut-label">Total</span>
              </div>
            </div>
            <div className="chart-legend">
              <div className="legend-item"><span className="dot" style={{backgroundColor: '#fb923c'}}></span>Pending <span>32 (25%)</span></div>
              <div className="legend-item"><span className="dot" style={{backgroundColor: '#60a5fa'}}></span>Processing <span>28 (21.9%)</span></div>
              <div className="legend-item"><span className="dot" style={{backgroundColor: '#76b852'}}></span>Shipped <span>45 (35.2%)</span></div>
              <div className="legend-item"><span className="dot" style={{backgroundColor: '#86efac'}}></span>Delivered <span>18 (14.1%)</span></div>
              <div className="legend-item"><span className="dot" style={{backgroundColor: '#fca5a5'}}></span>Cancelled <span>5 (3.9%)</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="tables-grid">
        <div className="table-card recent-orders">
          <div className="table-header">
            <h3>Recent Orders</h3>
            <button className="btn-view-all">View All</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#SN1287</td>
                <td>Rahul Sharma</td>
                <td>May 24, 2024</td>
                <td>₹ 1,250</td>
                <td><span className="status-badge status-delivered">Delivered</span></td>
              </tr>
              <tr>
                <td>#SN1286</td>
                <td>Priya Verma</td>
                <td>May 24, 2024</td>
                <td>₹ 890</td>
                <td><span className="status-badge status-shipped">Shipped</span></td>
              </tr>
              <tr>
                <td>#SN1285</td>
                <td>Amit Kumar</td>
                <td>May 23, 2024</td>
                <td>₹ 1,680</td>
                <td><span className="status-badge status-processing">Processing</span></td>
              </tr>
              <tr>
                <td>#SN1284</td>
                <td>Neha Singh</td>
                <td>May 23, 2024</td>
                <td>₹ 560</td>
                <td><span className="status-badge status-pending">Pending</span></td>
              </tr>
              <tr>
                <td>#SN1283</td>
                <td>Vikram Das</td>
                <td>May 22, 2024</td>
                <td>₹ 2,150</td>
                <td><span className="status-badge status-delivered">Delivered</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-card top-plants">
          <div className="table-header">
            <h3>Top Selling Plants</h3>
            <button className="btn-view-all">View All</button>
          </div>
          <div className="plant-list">
            <div className="plant-list-item">
              <div className="plant-info">
                <div className="plant-img-placeholder">🪴</div>
                <span>Areca Palm</span>
              </div>
              <span className="plant-sales">45 Sales</span>
            </div>
            <div className="plant-list-item">
              <div className="plant-info">
                <div className="plant-img-placeholder">🪴</div>
                <span>Snake Plant</span>
              </div>
              <span className="plant-sales">38 Sales</span>
            </div>
            <div className="plant-list-item">
              <div className="plant-info">
                <div className="plant-img-placeholder">🪴</div>
                <span>Peace Lily</span>
              </div>
              <span className="plant-sales">32 Sales</span>
            </div>
            <div className="plant-list-item">
              <div className="plant-info">
                <div className="plant-img-placeholder">🪴</div>
                <span>Rubber Plant</span>
              </div>
              <span className="plant-sales">28 Sales</span>
            </div>
            <div className="plant-list-item">
              <div className="plant-info">
                <div className="plant-img-placeholder">🪴</div>
                <span>ZZ Plant</span>
              </div>
              <span className="plant-sales">25 Sales</span>
            </div>
          </div>
        </div>
      </div>

      <div className="table-card full-width">
        <div className="table-header">
          <h3>Recent Enquiries</h3>
          <button className="btn-view-all">View All</button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Karan Mehta</td>
              <td>karanmehta@gmail.com</td>
              <td>Do you have bonsai plants available?</td>
              <td>May 24, 2024</td>
              <td><span className="status-badge status-new">New</span></td>
            </tr>
            <tr>
              <td>Sneha Iyer</td>
              <td>sneha.iyer@gmail.com</td>
              <td>What is the delivery time to Kolkata?</td>
              <td>May 24, 2024</td>
              <td><span className="status-badge status-new">New</span></td>
            </tr>
            <tr>
              <td>Ankit Patel</td>
              <td>ankitp@gmail.com</td>
              <td>Can I get plant care tips?</td>
              <td>May 23, 2024</td>
              <td><span className="status-badge status-replied">Replied</span></td>
            </tr>
            <tr>
              <td>Pooja Nair</td>
              <td>pooja.nair@gmail.com</td>
              <td>Do you offer bulk order discounts?</td>
              <td>May 22, 2024</td>
              <td><span className="status-badge status-replied">Replied</span></td>
            </tr>
            <tr>
              <td>Rohit Shah</td>
              <td>rohitshah@gmail.com</td>
              <td>Need help choosing indoor plants.</td>
              <td>May 22, 2024</td>
              <td><span className="status-badge status-closed">Closed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
