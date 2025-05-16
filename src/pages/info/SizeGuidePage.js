import React from 'react';
import { Container, Row, Col, Card, Table, Nav, Tab } from 'react-bootstrap';

const SizeGuidePage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="text-center mb-4">Size Guide</h1>
          <p className="text-center text-muted mb-5">
            Use our size charts to find the perfect fit. Measurements are in inches.
          </p>

          <Card className="shadow-sm border-0 rounded-lg mb-5">
            <Card.Body className="p-4">
              <Tab.Container defaultActiveKey="men">
                <Row>
                  <Col md={3}>
                    <Nav variant="pills" className="flex-column mb-4">
                      <Nav.Item>
                        <Nav.Link eventKey="men">Men</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="women">Women</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="kids">Kids</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="footwear">Footwear</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="men">
                        <h4>Men's Apparel</h4>
                        <Table responsive bordered hover className="mt-3">
                          <thead className="table-light">
                            <tr>
                              <th>Size</th>
                              <th>Chest</th>
                              <th>Waist</th>
                              <th>Hip</th>
                              <th>Sleeve</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>S</td>
                              <td>35-37</td>
                              <td>29-31</td>
                              <td>35-37</td>
                              <td>32-33</td>
                            </tr>
                            <tr>
                              <td>M</td>
                              <td>38-40</td>
                              <td>32-34</td>
                              <td>38-40</td>
                              <td>33-34</td>
                            </tr>
                            <tr>
                              <td>L</td>
                              <td>41-43</td>
                              <td>35-37</td>
                              <td>41-43</td>
                              <td>34-35</td>
                            </tr>
                            <tr>
                              <td>XL</td>
                              <td>44-46</td>
                              <td>38-40</td>
                              <td>44-46</td>
                              <td>35-36</td>
                            </tr>
                            <tr>
                              <td>XXL</td>
                              <td>47-49</td>
                              <td>41-43</td>
                              <td>47-49</td>
                              <td>36-37</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="women">
                        <h4>Women's Apparel</h4>
                        <Table responsive bordered hover className="mt-3">
                          <thead className="table-light">
                            <tr>
                              <th>Size</th>
                              <th>Bust</th>
                              <th>Waist</th>
                              <th>Hip</th>
                              <th>Sleeve</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>XS</td>
                              <td>31-32</td>
                              <td>24-25</td>
                              <td>34-35</td>
                              <td>30-31</td>
                            </tr>
                            <tr>
                              <td>S</td>
                              <td>33-34</td>
                              <td>26-27</td>
                              <td>36-37</td>
                              <td>31-32</td>
                            </tr>
                            <tr>
                              <td>M</td>
                              <td>35-36</td>
                              <td>28-29</td>
                              <td>38-39</td>
                              <td>32-33</td>
                            </tr>
                            <tr>
                              <td>L</td>
                              <td>37-39</td>
                              <td>30-32</td>
                              <td>40-42</td>
                              <td>33-34</td>
                            </tr>
                            <tr>
                              <td>XL</td>
                              <td>40-42</td>
                              <td>33-35</td>
                              <td>43-45</td>
                              <td>34-35</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="kids">
                        <h4>Kids' Apparel</h4>
                        <Table responsive bordered hover className="mt-3">
                          <thead className="table-light">
                            <tr>
                              <th>Size</th>
                              <th>Age</th>
                              <th>Height</th>
                              <th>Chest</th>
                              <th>Waist</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2T</td>
                              <td>2 years</td>
                              <td>33-35</td>
                              <td>21</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>3T</td>
                              <td>3 years</td>
                              <td>36-38</td>
                              <td>22</td>
                              <td>20.5</td>
                            </tr>
                            <tr>
                              <td>4T</td>
                              <td>4 years</td>
                              <td>39-41</td>
                              <td>23</td>
                              <td>21</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>5 years</td>
                              <td>42-44</td>
                              <td>24</td>
                              <td>21.5</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>6 years</td>
                              <td>45-47</td>
                              <td>25</td>
                              <td>22</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="footwear">
                        <h4>Footwear</h4>
                        <Row>
                          <Col md={6}>
                            <h5 className="mt-3">Men's Shoe Size</h5>
                            <Table responsive bordered hover className="mt-2">
                              <thead className="table-light">
                                <tr>
                                  <th>US</th>
                                  <th>EU</th>
                                  <th>UK</th>
                                  <th>Inches</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>7</td>
                                  <td>40</td>
                                  <td>6.5</td>
                                  <td>9.8</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>41</td>
                                  <td>7.5</td>
                                  <td>10.1</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>42</td>
                                  <td>8.5</td>
                                  <td>10.5</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>43</td>
                                  <td>9.5</td>
                                  <td>10.9</td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>44</td>
                                  <td>10.5</td>
                                  <td>11.3</td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>45</td>
                                  <td>11.5</td>
                                  <td>11.6</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                          <Col md={6}>
                            <h5 className="mt-3">Women's Shoe Size</h5>
                            <Table responsive bordered hover className="mt-2">
                              <thead className="table-light">
                                <tr>
                                  <th>US</th>
                                  <th>EU</th>
                                  <th>UK</th>
                                  <th>Inches</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>5</td>
                                  <td>35-36</td>
                                  <td>3</td>
                                  <td>8.5</td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>36-37</td>
                                  <td>4</td>
                                  <td>8.8</td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>37-38</td>
                                  <td>5</td>
                                  <td>9.1</td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>38-39</td>
                                  <td>6</td>
                                  <td>9.5</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>39-40</td>
                                  <td>7</td>
                                  <td>9.8</td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>40-41</td>
                                  <td>8</td>
                                  <td>10.2</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>

          <h4 className="mb-3">How to Measure</h4>
          <Card className="shadow-sm border-0 rounded-lg mb-4">
            <Card.Body className="p-4">
              <Row>
                <Col md={6} className="mb-4">
                  <h5>Chest/Bust</h5>
                  <p>Measure around the fullest part of your chest, keeping the measuring tape horizontal.</p>
                  
                  <h5 className="mt-4">Waist</h5>
                  <p>Measure around your natural waistline, the narrowest part of your waist.</p>
                </Col>
                <Col md={6}>
                  <h5>Hip</h5>
                  <p>Measure around the widest part of your hips, keeping the tape horizontal.</p>
                  
                  <h5 className="mt-4">Sleeve</h5>
                  <p>Measure from the center back of your neck, across your shoulder and down your arm to the wrist.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="bg-light p-4 rounded-lg">
            <h5>Still not sure about your size?</h5>
            <p className="mb-0">
              Contact our customer service team at <a href="mailto:support@stylehub.com">support@stylehub.com</a> or 
              visit our <a href="/contact">Contact Us</a> page for personalized sizing assistance.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SizeGuidePage;
