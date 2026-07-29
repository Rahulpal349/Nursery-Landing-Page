import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addPlant } from '../../utils/plantStorage';
import './AdminAddPlant.css';

const AdminAddPlant = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    scientificName: '',
    commonName: '',
    category: '',
    price: '',
    shortDescription: '',
    tagline: '',
    image: '',
    careInstructions: '',
    soilType: '',
    wateringFrequency: '',
    sunlightRequirement: '',
    temperatureRangeMin: '',
    temperatureRangeMax: '',
    growthRate: '',
    specialFeatures: '',
    isAvailable: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.shortDescription || !formData.careInstructions) {
      alert('Please fill out all required fields (*)');
      return;
    }

    const temperatureRange = formData.temperatureRangeMin && formData.temperatureRangeMax 
      ? `${formData.temperatureRangeMin} - ${formData.temperatureRangeMax}`
      : '';

    const newPlantData = {
      ...formData,
      temperatureRange,
    };

    const newId = addPlant(newPlantData);
    alert(`Plant added successfully! ID: ${newId}`);
    // Redirect to the new product page
    navigate(`/product/${newId}`);
  };

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
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter plant name" />
            </div>
            <div className="form-group">
              <label>SKU (Optional)</label>
              <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="Enter SKU or leave blank" />
            </div>
            
            <div className="form-group">
              <label>Scientific Name</label>
              <input type="text" name="scientificName" value={formData.scientificName} onChange={handleChange} placeholder="Enter scientific name (optional)" />
            </div>
            <div className="form-group">
              <label>Common Name (Optional)</label>
              <input type="text" name="commonName" value={formData.commonName} onChange={handleChange} placeholder="Enter common name" />
            </div>
            
            <div className="form-group">
              <label>Category <span className="required">*</span></label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select category</option>
                <option value="indoor">Indoor Plants</option>
                <option value="outdoor">Outdoor Plants</option>
                <option value="succulents">Succulents</option>
                <option value="flowering">Flowering</option>
              </select>
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Short Description <span className="required">*</span></label>
              <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Enter short description about the plant" rows="3"></textarea>
              <div className="char-count">{formData.shortDescription.length}/150</div>
            </div>
            <div className="form-group">
              <label>Tagline (Optional)</label>
              <textarea name="tagline" value={formData.tagline} onChange={handleChange} placeholder="A short catchy tagline (optional)" rows="3"></textarea>
              <div className="char-count">{formData.tagline.length}/100</div>
            </div>
          </div>
        </div>

        {/* 2. Plant Images */}
        <div className="form-section">
          <h3>2. Plant Images</h3>
          <p className="section-desc">Provide an image URL for the plant</p>
          
          <div className="form-group" style={{maxWidth: '500px'}}>
            <label>Image URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://example.com/plant.jpg" />
          </div>
          {formData.image && (
            <div style={{marginTop: '15px'}}>
              <p style={{fontSize: '13px', color: '#556b5f', marginBottom: '5px'}}>Preview:</p>
              <img src={formData.image} alt="Preview" style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px'}} />
            </div>
          )}
        </div>

        {/* 3. Plant Details */}
        <div className="form-section">
          <h3>3. Plant Details</h3>
          
          <div className="form-grid-2 align-top">
            <div className="form-group">
              <label>Plant Care Instructions <span className="required">*</span></label>
              <textarea name="careInstructions" value={formData.careInstructions} onChange={handleChange} placeholder="Enter care instructions for this plant" rows="5"></textarea>
              <div className="char-count">{formData.careInstructions.length}/1000</div>
            </div>
            
            <div className="form-grid-1 gap-4">
              <div className="form-group">
                <label>Soil Type</label>
                <select name="soilType" value={formData.soilType} onChange={handleChange}>
                  <option value="">Select soil type</option>
                  <option value="well-draining">Well-draining</option>
                  <option value="moist">Moist but well-drained</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                </select>
              </div>
              <div className="form-group">
                <label>Watering Frequency</label>
                <select name="wateringFrequency" value={formData.wateringFrequency} onChange={handleChange}>
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
              <select name="sunlightRequirement" value={formData.sunlightRequirement} onChange={handleChange}>
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
                <input type="number" name="temperatureRangeMin" value={formData.temperatureRangeMin} onChange={handleChange} placeholder="Min °C" />
                <span className="range-separator">-</span>
                <input type="number" name="temperatureRangeMax" value={formData.temperatureRangeMax} onChange={handleChange} placeholder="Max °C" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Growth Rate</label>
              <select name="growthRate" value={formData.growthRate} onChange={handleChange}>
                <option value="">Select growth rate</option>
                <option value="slow">Slow</option>
                <option value="moderate">Moderate</option>
                <option value="fast">Fast</option>
              </select>
            </div>
            
            <div className="form-group" style={{gridColumn: '1 / -1'}}>
              <label>Special Features (Optional)</label>
              <input type="text" name="specialFeatures" value={formData.specialFeatures} onChange={handleChange} placeholder="Highlight special features of this plant (comma separated)" />
              <div className="char-count" style={{textAlign: 'right'}}>{formData.specialFeatures.length}/300</div>
            </div>
          </div>
        </div>

        {/* 4. Availability */}
        <div className="form-section no-border">
          <h3>4. Availability</h3>
          
          <div className="availability-toggle">
            <label className="switch">
              <input type="checkbox" name="isAvailable" checked={formData.isAvailable} onChange={handleChange} />
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
          <button className="btn-cancel" onClick={() => navigate('/admin/plants')}>Cancel</button>
          <button className="btn-draft">Save as Draft</button>
          <button className="btn-publish" onClick={handlePublish}>Publish Plant</button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddPlant;
