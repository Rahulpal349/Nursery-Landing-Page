import React from 'react';
import { Link } from 'react-router-dom';
import './AdminAddPlant.css';

const AdminAddPlant = () => {
  return (
    <div className="admin-add-plant">
      {/* Page Header */}
      <div className="page-header-row">
        <div>
          <div className="title-with-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-green)" stroke="var(--primary-green)" strokeWidth="1">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z"></path>
            </svg>
            <h2>Add New Plant</h2>
          </div>
          <div className="breadcrumbs">
            <Link to="/admin">Dashboard</Link>
            <span className="separator">&gt;</span>
            <Link to="/admin/plants">Plants</Link>
            <span className="separator">&gt;</span>
            <span className="current">Add New Plant</span>
          </div>
        </div>
        <Link to="/admin/plants" className="btn-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Plants
        </Link>
      </div>

      <div className="form-card">
        {/* 1. Basic Information */}
        <div className="form-section">
          <h3>1. Basic Information</h3>
          
          <div className="form-grid-2">
            <div className="form-group">
              <label>Plant Name <span className="required">*</span></label>
              <input type="text" placeholder="Enter plant name" />
            </div>
            <div className="form-group">
              <label>SKU (Optional)</label>
              <input type="text" placeholder="Enter SKU or leave blank" />
            </div>
            
            <div className="form-group">
              <label>Scientific Name</label>
              <input type="text" placeholder="Enter scientific name (optional)" />
            </div>
            <div className="form-group">
              <label>Common Name (Optional)</label>
              <input type="text" placeholder="Enter common name" />
            </div>
            
            <div className="form-group">
              <label>Category <span className="required">*</span></label>
              <select>
                <option value="">Select category</option>
                <option value="indoor">Indoor Plants</option>
                <option value="outdoor">Outdoor Plants</option>
                <option value="succulents">Succulents</option>
                <option value="flowering">Flowering</option>
              </select>
            </div>
            <div className="form-group">
              <label>Price (₹) <span className="required">*</span></label>
              <input type="number" placeholder="Enter price" />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Short Description <span className="required">*</span></label>
              <textarea placeholder="Enter short description about the plant" rows="3"></textarea>
              <div className="char-count">0/150</div>
            </div>
            <div className="form-group">
              <label>Tagline (Optional)</label>
              <textarea placeholder="A short catchy tagline (optional)" rows="3"></textarea>
              <div className="char-count">0/100</div>
            </div>
          </div>
        </div>

        {/* 2. Plant Images */}
        <div className="form-section">
          <h3>2. Plant Images</h3>
          <p className="section-desc">Upload high-quality images of the plant</p>
          
          <div className="image-upload-area">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <p>Drag & drop images here</p>
            <span className="or-text">or</span>
            <button className="btn-browse">Browse Files</button>
          </div>
          <div className="upload-footer">
            <span>You can upload up to 5 images. Recommended size: 1200x1200px</span>
            <span>0 / 5</span>
          </div>
        </div>

        {/* 3. Plant Details */}
        <div className="form-section">
          <h3>3. Plant Details</h3>
          
          <div className="form-grid-2 align-top">
            <div className="form-group">
              <label>Plant Care Instructions <span className="required">*</span></label>
              <textarea placeholder="Enter care instructions for this plant" rows="5"></textarea>
              <div className="char-count">0/1000</div>
            </div>
            
            <div className="form-grid-1 gap-4">
              <div className="form-group">
                <label>Soil Type</label>
                <select>
                  <option value="">Select soil type</option>
                  <option value="well-draining">Well-draining</option>
                  <option value="moist">Moist but well-drained</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                </select>
              </div>
              <div className="form-group">
                <label>Watering Frequency</label>
                <select>
                  <option value="">Select watering frequency</option>
                  <option value="daily">Daily</option>
                  <option value="twice-week">Twice a week</option>
                  <option value="weekly">Once a week</option>
                  <option value="bi-weekly">Every two weeks</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Sunlight Requirement</label>
              <select>
                <option value="">Select sunlight requirement</option>
                <option value="full-sun">Full Sun</option>
                <option value="partial-sun">Partial Sun / Partial Shade</option>
                <option value="bright-indirect">Bright Indirect Light</option>
                <option value="low-light">Low Light</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Temperature Range (°C)</label>
              <div className="range-inputs">
                <input type="number" placeholder="Min °C" />
                <span className="range-separator">-</span>
                <input type="number" placeholder="Max °C" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Growth Rate</label>
              <select>
                <option value="">Select growth rate</option>
                <option value="slow">Slow</option>
                <option value="moderate">Moderate</option>
                <option value="fast">Fast</option>
              </select>
            </div>
            
            <div className="form-group" style={{gridColumn: '1 / -1'}}>
              <label>Special Features (Optional)</label>
              <input type="text" placeholder="Highlight special features of this plant" />
              <div className="char-count" style={{textAlign: 'right'}}>0/300</div>
            </div>
          </div>
        </div>

        {/* 4. Availability */}
        <div className="form-section no-border">
          <h3>4. Availability</h3>
          
          <div className="availability-toggle">
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
            <div className="toggle-text">
              <strong>Available for purchase</strong>
              <span>Show this plant on the website</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="form-actions">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-draft">Save as Draft</button>
          <button className="btn-publish">Publish Plant</button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddPlant;
