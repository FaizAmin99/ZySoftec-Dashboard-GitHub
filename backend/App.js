
const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./zysoftec-dashboard-eff8d-firebase-adminsdk-4w00w-5741d28cbc.json');

//console.log('Lemme know Da Way', serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://zysoftec-dashboard-eff8d-default-rtdb.firebaseio.com/'
});

const db = admin.firestore();
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Get
app.get('/students', async (req, res) => {
  try {
    const studentsSnapshot = await db.collection('students').get();
    let students = studentsSnapshot.docs.map(doc => ({ id: doc.id,...doc.data() }));

    // For empty DataSet
    if (students.length === 0) {
      res.status(200).send({ message: "No students found." });
    } else {
      res.status(200).send(students);
    }
  } catch (error) {
    res.status(500).send({ error: "An error occurred while fetching students." });
  }
});

// Add
app.post('/students', async (req, res) => {
  const newStudent = req.body;
  const studentRef = await db.collection('students').add(newStudent);
  res.status(201).send({ id: studentRef.id });
});

//Updaee
app.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  await db.collection('students').doc(id).update(updatedData);
  res.status(200).send();
});

// Delete
app.delete('/students/:id', async (req, res) => {
  const { id } = req.params;
  await db.collection('students').doc(id).delete();
  res.status(200).send();
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
