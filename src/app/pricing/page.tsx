'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

type ProjectType = 'New Construction' | 'Existing Building';

const connectivityOptions = [
  { value: 'EEI Data Gateway', label: 'EEI Data Gateway', price: 1000 },
  { value: 'EEI Data Gateway Virtual Node', label: 'EEI Data Gateway Virtual Node', price: 0 },
  { value: 'Novant', label: 'Novant', price: 1500 },
  { value: 'Novant Virtual Node', label: 'Novant Virtual Node', price: 10000 },
  { value: 'BAS Export/Emails', label: 'BAS Export/Emails', price: 0 },
  { value: 'Unknown', label: 'Unknown (assumes EEI Data Gateway)', price: 1000 },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<ProjectType>('Existing Building');
  const [details, setDetails] = useState({
    projectName: '',
    clientName: '',
    clientCompany: '',
    squareFootage: 0,
    startDate: new Date().toISOString().split('T')[0],
    buildingLocation: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    projectDescription: '',
  });
  const [dataConnectivity, setDataConnectivity] = useState('EEI Data Gateway');
  const [addOns, setAddOns] = useState({
    chilledWaterPlant: false,
    leedReport: false,
    cellular: false,
    energyStarIntegration: false,
  });
  const [fee, setFee] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'squareFootage') {
      const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
      setDetails(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatSquareFootage = (value: number) => {
    return value ? value.toLocaleString() : '';
  };

  const handleAddOnToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAddOns(prev => ({...prev, [name]: checked}));
  };

  const baseRate = activeTab === 'New Construction' ? 0.12 : 0.08;
  const setupFee = 5000;
  const subscriptionFee = (details.squareFootage || 0) * baseRate;
  
  useEffect(() => {
    const chilledWaterFee = addOns.chilledWaterPlant ? 2500 : 0;
    const leedReportFee = addOns.leedReport ? 1000 : 0;
    const cellularFee = addOns.cellular ? 1500 : 0;
    const energyStarFee = addOns.energyStarIntegration ? 0 : 0;
    const connectivityFee = connectivityOptions.find(option => option.value === dataConnectivity)?.price || 1000;

    const totalFee = setupFee + subscriptionFee + chilledWaterFee + leedReportFee + cellularFee + energyStarFee + connectivityFee;
    setFee(Math.round(totalFee));
  }, [subscriptionFee, addOns, dataConnectivity, activeTab]);

  const TabButton: React.FC<{ tabType: ProjectType }> = ({ tabType }) => (
    <button
      onClick={() => setActiveTab(tabType)}
      className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-all ${
        activeTab === tabType
          ? 'bg-primary text-primary-foreground border-b-2 border-primary'
          : 'text-muted-foreground hover:text-foreground bg-muted/30'
      }`}
    >
      {tabType}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="py-6 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/">
            <Image
              src="/BalanceCx Logo - Black.png"
              alt="BalanceCx Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/#features" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Features</a>
            <a href="/#industries" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Industries</a>
            <a href="/#testimonials" className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3">Case Studies</a>
            <a href="/pricing" className="text-primary border-b-2 border-primary transition-colors text-base font-medium py-2 px-3">Pricing</a>
            <a 
              href="https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
            >
              Schedule Demo
            </a>
            <a 
              href="https://eei.balancecx.com/#/signIn" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-muted transition-colors text-base"
            >
              Log In
            </a>
          </nav>
        </div>
      </header>

      <div className="py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">Calculate your BalanceCx investment instantly</p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="border-b border-border mb-6">
              <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                <TabButton tabType="New Construction" />
                <TabButton tabType="Existing Building" />
              </nav>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4 border-b border-border pb-2">
                  Project Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Project Name</label>
                    <input
                      type="text"
                      name="projectName"
                      value={details.projectName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Client Name</label>
                    <input
                      type="text"
                      name="clientName"
                      value={details.clientName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Client Company</label>
                    <input
                      type="text"
                      name="clientCompany"
                      value={details.clientCompany}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Building Location</label>
                    <input
                      type="text"
                      name="buildingLocation"
                      value={details.buildingLocation}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Target Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={details.startDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Square Footage</label>
                    <input
                      type="text"
                      name="squareFootage"
                      value={formatSquareFootage(details.squareFootage)}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4 border-b border-border pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Contact Person</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={details.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Contact Email</label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={details.contactEmail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Contact Phone</label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={details.contactPhone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-muted-foreground mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={3}
                    value={details.projectDescription}
                    onChange={(e) => setDetails(prev => ({ ...prev, projectDescription: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Brief description of the project scope and requirements..."
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-4 border-b border-border pb-2">
                  Pricing Calculator
                </h3>
                <div className="space-y-4">
                  
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-muted-foreground">Pricing Rate (/sf/year)</span>
                      <span className="text-sm font-semibold text-foreground">${baseRate.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Standard Setup Fee</span>
                      <span className="text-sm font-bold text-foreground">${setupFee.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Annual Subscription Fee</span>
                      <span className="text-sm font-bold text-foreground">${subscriptionFee.toLocaleString()}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-card-foreground mb-3">Data Connectivity & Add-ons</h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-md border border-border">
                        <div className="flex items-center">
                          <label htmlFor="dataConnectivity" className="text-sm text-muted-foreground mr-3">
                            Data Connectivity:
                          </label>
                          <select
                            id="dataConnectivity"
                            name="dataConnectivity"
                            value={dataConnectivity}
                            onChange={(e) => setDataConnectivity(e.target.value)}
                            className="pl-3 pr-8 py-2 text-sm border border-input focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
                          >
                            {connectivityOptions.map(opt => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {connectivityOptions.find(opt => opt.value === dataConnectivity)?.price === 0 
                            ? 'Free' 
                            : `$${connectivityOptions.find(opt => opt.value === dataConnectivity)?.price?.toLocaleString() || '1,000'}`
                          }
                        </div>
                      </div>
                      
                      <label htmlFor="cellular" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer border border-border">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="cellular" 
                            name="cellular" 
                            checked={addOns.cellular} 
                            onChange={handleAddOnToggle} 
                            className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                          />
                          <span className="ml-3 text-sm text-muted-foreground">Cellular Data Connection</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">+$1,500</span>
                      </label>

                      <label htmlFor="chilledWaterPlant" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer border border-border">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="chilledWaterPlant" 
                            name="chilledWaterPlant" 
                            checked={addOns.chilledWaterPlant} 
                            onChange={handleAddOnToggle} 
                            className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                          />
                          <span className="ml-3 text-sm text-muted-foreground">Chilled Water Plant</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">+$2,500</span>
                      </label>

                      <label htmlFor="leedReport" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer border border-border">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="leedReport" 
                            name="leedReport" 
                            checked={addOns.leedReport} 
                            onChange={handleAddOnToggle} 
                            className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                          />
                          <span className="ml-3 text-sm text-muted-foreground">LEED MBCx Report Fee</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">+$1,000</span>
                      </label>

                      <label htmlFor="energyStarIntegration" className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer border border-border">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="energyStarIntegration" 
                            name="energyStarIntegration" 
                            checked={addOns.energyStarIntegration} 
                            onChange={handleAddOnToggle} 
                            className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                          />
                          <span className="ml-3 text-sm text-muted-foreground">Energy Star Integration</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">Free</span>
                      </label>
                    </div>
                  </div>

                  <div className="mint-gradient p-6 rounded-lg mt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-white">Total Estimated Fee:</p>
                      <p className="text-3xl font-bold text-white">${fee.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => alert('Contact sales@balancecx.com for a custom proposal')}
                      className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Request Custom Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/BalanceCx Logo - Black.png"
                alt="BalanceCx Logo"
                width={160}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-muted-foreground max-w-md">
                Cloud-based analytics platform for building performance optimization, commissioning, and facility operations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/#features" className="hover:text-card-foreground transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-card-foreground transition-colors">Pricing</a></li>
                <li><a href="/#features" className="hover:text-card-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/#testimonials" className="hover:text-card-foreground transition-colors">About</a></li>
                <li><a href="https://outlook.office365.com/book/BalanceCxIntroduction@EEIengineers.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer" className="hover:text-card-foreground transition-colors">Contact</a></li>
                <li><a href="https://eei.balancecx.com" target="_blank" rel="noopener noreferrer" className="hover:text-card-foreground transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BalanceCx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}