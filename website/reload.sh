#!/bin/bash
sudo systemctl stop website
sudo systemctl daemon-reload
sudo systemctl start website
sudo systemctl enable website
sudo systemctl status website
