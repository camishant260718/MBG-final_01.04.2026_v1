"""
Backend API Tests for Mishant Gandhi Portfolio
Tests the health endpoint
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoint:
    """Health endpoint tests"""
    
    def test_health_endpoint_returns_200(self):
        """Test that /api/health returns 200 status"""
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    
    def test_health_endpoint_returns_ok_status(self):
        """Test that /api/health returns ok status in response"""
        response = requests.get(f"{BASE_URL}/api/health")
        data = response.json()
        assert "status" in data, "Response should contain 'status' field"
        assert data["status"] == "ok", f"Expected status 'ok', got {data['status']}"
    
    def test_health_endpoint_returns_message(self):
        """Test that /api/health returns a message"""
        response = requests.get(f"{BASE_URL}/api/health")
        data = response.json()
        assert "message" in data, "Response should contain 'message' field"
        assert "Mishant Gandhi" in data["message"], "Message should mention Mishant Gandhi"
