import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 15,
    padding: 48,
    flexGrow: 1,
  },
  company: {
    fontSize: 32,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 12,
    textAlign: 'center',
  },
  fullName: {
    marginTop: 48,
    fontSize: 14,
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    marginBottom: 4,
  },
  month: {
    fontSize: 14,
    marginBottom: 4,
  },
  salaryInfoHeading: {
    fontSize: 16,
    marginTop: 32,
    marginBottom: 6,
    backgroundColor: '#e5e7eb',
    paddingVertical: 4,
    textAlign: 'center',
  },

  flexBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 2,
    borderBottom: '1px solid #333',
  },
  netPayable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  salaryInfo: {
    fontSize: 14,
    fontWeight: 400,
  },

  signatureSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 160,
  },

  signature: {
    width: 160,
    textAlign: 'center',
    borderTop: '1px solid black',
    paddingTop: 4,
  },

  signatureName: {
    fontSize: 14,
    fontWeight: 400,
  },
});

const Pdf = ({ fullName, role, department, salary, absent, deduction, netPayable }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.company}>STAFF DECK</Text>
          <Text style={styles.tagline}>YOUR TAGLINE HERE</Text>
          <Text style={styles.fullName}>Employee Name: {fullName}</Text>
          <Text style={styles.role}>Designation: {role}</Text>
          <Text style={styles.month}>Month: {'December'}</Text>

          <Text style={styles.salaryInfoHeading}>Salary Info</Text>
          <View style={styles.flexBetween}>
            <Text style={styles.salaryInfo}>Salary:</Text>
            <Text style={styles.salaryInfo}>{salary}</Text>
          </View>
          <View style={styles.flexBetween}>
            <Text style={styles.salaryInfo}>Absent:</Text>
            <Text style={styles.salaryInfo}>{absent}</Text>
          </View>
          <View style={styles.flexBetween}>
            <Text style={styles.salaryInfo}>Deduction:</Text>
            <Text style={styles.salaryInfo}>{deduction}</Text>
          </View>
          <View style={styles.netPayable}>
            <Text></Text>
            <Text style={styles.salaryInfo}>Net Payable: {netPayable}</Text>
          </View>
          <View style={styles.signatureSection}>
            <View style={styles.signature}>
              <Text style={styles.signatureName}>HR Admin</Text>
            </View>
            <View></View>
            <View style={styles.signature}>
              <Text style={styles.signatureName}>Finance Admin</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default Pdf;
